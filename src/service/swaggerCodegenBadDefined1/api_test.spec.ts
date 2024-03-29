/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as api from "./api"
import { Configuration } from "./configuration"

const config: Configuration = {}

describe("DefaultApi", () => {
  let instance: api.DefaultApi
  beforeEach(function() {
    instance = new api.DefaultApi(config)
  });

  test("saveUsingPOST", () => {
    const body: string = undefined
    return expect(instance.saveUsingPOST(body, {})).resolves.toBe(null)
  })
})

describe("APIApi", () => {
  let instance: api.APIApi
  beforeEach(function() {
    instance = new api.APIApi(config)
  });

  test("deleteBatchUsingDELETE", () => {
    const body: string = undefined
    return expect(instance.deleteBatchUsingDELETE(body, {})).resolves.toBe(null)
  })
  test("listUsingGET", () => {
    const createdBy: string = "createdBy_example"
    const createdTimeEnd: Date = 2013-10-20T19:20:30+01:00
    const createdTimeStart: Date = 2013-10-20T19:20:30+01:00
    const deleted: boolean = true
    const description: string = "description_example"
    const endIndex: number = 56
    const fieldId: string = "fieldId_example"
    const fieldName: string = "fieldName_example"
    const operatedBy: string = "operatedBy_example"
    const operatedTimeEnd: Date = 2013-10-20T19:20:30+01:00
    const operatedTimeStart: Date = 2013-10-20T19:20:30+01:00
    const pageNo: number = 56
    const pageSize: number = 56
    const startIndex: number = 56
    const tableId: string = "tableId_example"
    const type: string = "type_example"
    return expect(instance.listUsingGET(createdBy, createdTimeEnd, createdTimeStart, deleted, description, endIndex, fieldId, fieldName, operatedBy, operatedTimeEnd, operatedTimeStart, pageNo, pageSize, startIndex, tableId, type, {})).resolves.toBe(null)
  })
  test("updateUsingPUT", () => {
    const body: string = undefined
    return expect(instance.updateUsingPUT(body, {})).resolves.toBe(null)
  })
})

