/**
 * Swagger Petstore
 * 1.0.5
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from 'oazapfts/lib/runtime'
import * as QS from 'oazapfts/lib/runtime/query'
export const defaults: Oazapfts.RequestOpts = {
  baseUrl: 'https://petstore.swagger.io/v2',
}
const oazapfts = Oazapfts.runtime(defaults)
export const servers = {
  server1: 'https://petstore.swagger.io/v2',
  server2: 'http://petstore.swagger.io/v2',
}
export type ApiResponse = {
  code?: number
  type?: string
  message?: string
}
export type Category = {
  id?: number
  name?: string
}
export type Tag = {
  id?: number
  name?: string
}
export type Pet = {
  id?: number
  category?: Category
  name: string
  photoUrls: string[]
  tags?: Tag[]
  status?: 'available' | 'pending' | 'sold'
}
export type Order = {
  id?: number
  petId?: number
  quantity?: number
  shipDate?: string
  status?: 'placed' | 'approved' | 'delivered'
  complete?: boolean
}
export type User = {
  id?: number
  username?: string
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  phone?: string
  userStatus?: number
}
/**
 * uploads an image
 */
export function uploadFile(
  petId: number,
  body?: {
    additionalMetadata?: string
    file?: Blob
  },
  opts?: Oazapfts.RequestOpts,
) {
  return oazapfts.fetchJson<{
    status: 200
    data: ApiResponse
  }>(
    `/pet/${petId}/uploadImage`,
    oazapfts.multipart({
      ...opts,
      method: 'POST',
      body,
    }),
  )
}
/**
 * Add a new pet to the store
 */
export function addPet(pet: Pet, opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchText(
    '/pet',
    oazapfts.json({
      ...opts,
      method: 'POST',
      body: pet,
    }),
  )
}
/**
 * Update an existing pet
 */
export function updatePet(pet: Pet, opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchText(
    '/pet',
    oazapfts.json({
      ...opts,
      method: 'PUT',
      body: pet,
    }),
  )
}
/**
 * Finds Pets by status
 */
export function findPetsByStatus(
  status: ('available' | 'pending' | 'sold')[],
  opts?: Oazapfts.RequestOpts,
) {
  return oazapfts.fetchJson<
    | {
        status: 200
        data: Pet[]
      }
    | {
        status: 400
      }
  >(
    `/pet/findByStatus${QS.query(
      QS.explode({
        status,
      }),
    )}`,
    {
      ...opts,
    },
  )
}
/**
 * Finds Pets by tags
 */
export function findPetsByTags(tags: string[], opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchJson<
    | {
        status: 200
        data: Pet[]
      }
    | {
        status: 400
      }
  >(
    `/pet/findByTags${QS.query(
      QS.explode({
        tags,
      }),
    )}`,
    {
      ...opts,
    },
  )
}
/**
 * Find pet by ID
 */
export function getPetById(petId: number, opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchJson<
    | {
        status: 200
        data: Pet
      }
    | {
        status: 400
      }
    | {
        status: 404
      }
  >(`/pet/${petId}`, {
    ...opts,
  })
}
/**
 * Updates a pet in the store with form data
 */
export function updatePetWithForm(
  petId: number,
  body?: {
    name?: string
    status?: string
  },
  opts?: Oazapfts.RequestOpts,
) {
  return oazapfts.fetchText(
    `/pet/${petId}`,
    oazapfts.form({
      ...opts,
      method: 'POST',
      body,
    }),
  )
}
/**
 * Deletes a pet
 */
export function deletePet(
  petId: number,
  {
    apiKey,
  }: {
    apiKey?: string
  } = {},
  opts?: Oazapfts.RequestOpts,
) {
  return oazapfts.fetchText(`/pet/${petId}`, {
    ...opts,
    method: 'DELETE',
    headers: {
      ...(opts && opts.headers),
      api_key: apiKey,
    },
  })
}
/**
 * Returns pet inventories by status
 */
export function getInventory(opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchJson<{
    status: 200
    data: {
      [key: string]: number
    }
  }>('/store/inventory', {
    ...opts,
  })
}
/**
 * Place an order for a pet
 */
export function placeOrder(order: Order, opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchJson<
    | {
        status: 200
        data: Order
      }
    | {
        status: 400
      }
  >(
    '/store/order',
    oazapfts.json({
      ...opts,
      method: 'POST',
      body: order,
    }),
  )
}
/**
 * Find purchase order by ID
 */
export function getOrderById(orderId: number, opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchJson<
    | {
        status: 200
        data: Order
      }
    | {
        status: 400
      }
    | {
        status: 404
      }
  >(`/store/order/${orderId}`, {
    ...opts,
  })
}
/**
 * Delete purchase order by ID
 */
export function deleteOrder(orderId: number, opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchText(`/store/order/${orderId}`, {
    ...opts,
    method: 'DELETE',
  })
}
/**
 * Creates list of users with given input array
 */
export function createUsersWithListInput(
  body: User[],
  opts?: Oazapfts.RequestOpts,
) {
  return oazapfts.fetchText(
    '/user/createWithList',
    oazapfts.json({
      ...opts,
      method: 'POST',
      body,
    }),
  )
}
/**
 * Get user by user name
 */
export function getUserByName(username: string, opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchJson<
    | {
        status: 200
        data: User
      }
    | {
        status: 400
      }
    | {
        status: 404
      }
  >(`/user/${username}`, {
    ...opts,
  })
}
/**
 * Updated user
 */
export function updateUser(
  username: string,
  user: User,
  opts?: Oazapfts.RequestOpts,
) {
  return oazapfts.fetchText(
    `/user/${username}`,
    oazapfts.json({
      ...opts,
      method: 'PUT',
      body: user,
    }),
  )
}
/**
 * Delete user
 */
export function deleteUser(username: string, opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchText(`/user/${username}`, {
    ...opts,
    method: 'DELETE',
  })
}
/**
 * Logs user into the system
 */
export function loginUser(
  username: string,
  password: string,
  opts?: Oazapfts.RequestOpts,
) {
  return oazapfts.fetchJson<
    | {
        status: 200
        data: string
      }
    | {
        status: 400
      }
  >(
    `/user/login${QS.query(
      QS.form({
        username,
        password,
      }),
    )}`,
    {
      ...opts,
    },
  )
}
/**
 * Logs out current logged in user session
 */
export function logoutUser(opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchText('/user/logout', {
    ...opts,
  })
}
/**
 * Creates list of users with given input array
 */
export function createUsersWithArrayInput(
  body: User[],
  opts?: Oazapfts.RequestOpts,
) {
  return oazapfts.fetchText(
    '/user/createWithArray',
    oazapfts.json({
      ...opts,
      method: 'POST',
      body,
    }),
  )
}
/**
 * Create user
 */
export function createUser(user: User, opts?: Oazapfts.RequestOpts) {
  return oazapfts.fetchText(
    '/user',
    oazapfts.json({
      ...opts,
      method: 'POST',
      body: user,
    }),
  )
}
