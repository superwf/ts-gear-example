type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace petV3 {}
}

declare namespace API {
  export namespace petV3 {
    /**
     * Everything about your Pets
     */
    export namespace pet {
      /**
        * Update an existing pet
Update an existing pet by Id
        * /pet
        */
      export namespace updatePet {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
        * Add a new pet to the store
Add a new pet to the store
        * /pet
        */
      export namespace addPet {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
        * Finds Pets by status
Multiple status values can be provided with comma separated strings
        * /pet/findByStatus
        */
      export namespace findPetsByStatus {
        export class Params {
          /** Status values that need to be considered for filter */
          status?: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
        * Finds Pets by tags
Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
        * /pet/findByTags
        */
      export namespace findPetsByTags {
        export class Params {
          /** Tags to filter by */
          tags?: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
        * Find pet by ID
Returns a single pet
        * /pet/{petId}
        */
      export namespace getPetById {
        export class Params {
          /** ID of pet to return */
          petId: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * Updates a pet in the store with form data
       * /pet/{petId}
       */
      export namespace updatePetWithForm {
        export class Params {
          /** ID of pet that needs to be updated */
          petId: any;
          /** Name of pet that needs to be updated */
          name?: any;
          /** Status of pet that needs to be updated */
          status?: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * Deletes a pet
       * /pet/{petId}
       */
      export namespace deletePet {
        export class Params {
          /** Pet id to delete */
          petId: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * uploads an image
       * /pet/{petId}/uploadImage
       */
      export namespace uploadFile {
        export class Params {
          /** ID of pet to update */
          petId: any;
          /** Additional Metadata */
          additionalMetadata?: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }
    }

    /**
     * Operations about user
     */
    export namespace store {
      /**
        * Returns pet inventories by status
Returns a map of status codes to quantities
        * /store/inventory
        */
      export namespace getInventory {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
        * Place an order for a pet
Place a new order in the store
        * /store/order
        */
      export namespace placeOrder {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
        * Find purchase order by ID
For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
        * /store/order/{orderId}
        */
      export namespace getOrderById {
        export class Params {
          /** ID of order that needs to be fetched */
          orderId: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
        * Delete purchase order by ID
For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
        * /store/order/{orderId}
        */
      export namespace deleteOrder {
        export class Params {
          /** ID of the order that needs to be deleted */
          orderId: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }
    }

    /**
     * Access to Petstore orders
     */
    export namespace user {
      /**
        * Create user
This can only be done by the logged in user.
        * /user
        */
      export namespace createUser {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
        * Creates list of users with given input array
Creates list of users with given input array
        * /user/createWithList
        */
      export namespace createUsersWithListInput {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * Logs user into the system
       * /user/login
       */
      export namespace loginUser {
        export class Params {
          /** The user name for login */
          username?: any;
          /** The password for login in clear text */
          password?: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * Logs out current logged in user session
       * /user/logout
       */
      export namespace logoutUser {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * Get user by user name
       * /user/{username}
       */
      export namespace getUserByName {
        export class Params {
          /** The name that needs to be fetched. Use user1 for testing.  */
          username: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
        * Update user
This can only be done by the logged in user.
        * /user/{username}
        */
      export namespace updateUser {
        export class Params {
          /** name that need to be deleted */
          username: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
        * Delete user
This can only be done by the logged in user.
        * /user/{username}
        */
      export namespace deleteUser {
        export class Params {
          /** The name that needs to be deleted */
          username: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }
    }
  }
}
