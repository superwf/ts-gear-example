/** use native fetch to request */
import { URL } from 'url'
import { forEach, isPlainObject } from 'lodash'
import * as pathToRegexp from 'path-to-regexp'
import type { RequestParameter } from './type'
import { MIME_JSON, MIME_TEXT } from './constant'

/** add query and path parameters to url
 * e.g.
 * parseUrl('/api/abc/:id', { path: { id: '123' }, query: { name: 'def' } }) => '/api/abc/123?name=def'
 * */
export const parseUrl = (url: string, option: RequestParameter): string => {
  if (option.path) {
    Object.getOwnPropertyNames(option.path).forEach((k) => {
      option.path[k] = encodeURIComponent(String(option.path[k]))
    })
    url = pathToRegexp.compile(url)(option.path)
  }
  if (option.query) {
    let onlyPathname = false
    if (!url.startsWith('http:') || !url.startsWith('https:')) {
      url = `http://localhost${url}`
      onlyPathname = true
    }
    const urlObject = new URL(url)
    const search = new URLSearchParams(urlObject.search)
    Object.getOwnPropertyNames(option.query).forEach((k) => {
      const v = option.query[k]
      if (Array.isArray(v)) {
        v.forEach((item, i) => {
          if (i === 0) {
            search.set(k, item)
          } else {
            search.append(k, item)
          }
        })
      } else {
        search.set(k, v)
      }
    })
    const searchString = search.toString()
    url = `${onlyPathname ? '' : urlObject.origin}${urlObject.pathname}${
      searchString ? '?' : ''
    }${searchString}`
  }
  return url
}

/** 请求拦截器
 * 每个请求的通用设置放到这里
 * 如果请求体是普通对象，用json格式化并添加json的http header
 * 如果请求体有formData项，自动添加成FormData
 * */
export function interceptRequest(
  url: string,
  option: RequestParameter & {
    requestInit?: RequestInit
  },
): [string, RequestInit] {
  const { requestInit } = option
  url = parseUrl(url, option)
  const requestOption: RequestInit = {
    method: option.method,
    ...requestInit,
    // add the default request option here
  }
  if (option.header) {
    requestOption.headers = option.header
  }
  if (option.body) {
    let { body } = option
    // add application/json header when body is plain object
    // and auto json stringify the body
    if (isPlainObject(body)) {
      requestOption.headers = {
        'Content-Type': MIME_JSON,
        ...requestOption.headers,
      }
      body = JSON.stringify(body)
      requestOption.body = body
    } else {
      requestOption.body = option.body
    }
  }
  // body 与 formData 不能同时存在
  // 所以如果有formData时，直接给requestOption.body赋值即可
  if (option.formData) {
    const formData = new FormData()
    // 这种上传文件的情况，应该只有一维的键值对应，只用forEach处理第一层数据
    forEach(option.formData, (v: any, k: string) => {
      formData.append(k, v)
    })
    requestOption.body = formData
  }
  return [url, requestOption]
}

/** 根据response的header处理各种返回数据
 * 目前只是转了json和text两种，需要其他自行添加
 * */
export function interceptResponse(res: Response) {
  if (!res.ok) {
    throw new Error(
      `response not ok, status: ${res.status}, ${res.statusText}, url: ${res.url}`,
    )
  }
  const contentType = res.headers.get('Content-Type')
  if (contentType) {
    if (contentType.includes(MIME_JSON)) {
      return res.json()
    }

    if (contentType.includes(MIME_TEXT)) {
      return res.text()
    }
    // add more response mime type logic here
    // 在此处添加处理更多的response类型处理逻辑
  }
  return res
}

/** native fetch wrappper */
export const requester = async (
  apiUrl: string,
  param?: RequestParameter & {
    requestInit?: RequestInit
  },
) => {
  const [url, option] = interceptRequest(apiUrl, param || {})
  return fetch(url, option).then(interceptResponse)
}

export default requester
