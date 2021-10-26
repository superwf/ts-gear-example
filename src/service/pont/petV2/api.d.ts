type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace petV2 {
    export class ApiResponse {
      /** code */
      code?: number;

      /** message */
      message?: string;

      /** type */
      type?: string;
    }

    export class Category {
      /** id */
      id?: number;

      /** name */
      name?: string;
    }

    export class Order {
      /** complete */
      complete?: boolean;

      /** id */
      id?: number;

      /** petId */
      petId?: number;

      /** quantity */
      quantity?: number;

      /** shipDate */
      shipDate?: string;

      /** Order Status */
      status?: 'placed' | 'approved' | 'delivered';
    }

    export class Pet {
      /** category */
      category?: defs.petV2.Category;

      /** id */
      id?: number;

      /** name */
      name: string;

      /** photoUrls */
      photoUrls: Array<string>;

      /** pet status in the store */
      status?: 'available' | 'pending' | 'sold';

      /** tags */
      tags?: Array<defs.petV2.Tag>;
    }

    export class Tag {
      /** id */
      id?: number;

      /** name */
      name?: string;
    }

    export class User {
      /** email */
      email?: string;

      /** firstName */
      firstName?: string;

      /** id */
      id?: number;

      /** lastName */
      lastName?: string;

      /** password */
      password?: string;

      /** phone */
      phone?: string;

      /** User Status */
      userStatus?: number;

      /** username */
      username?: string;
    }
  }
}

declare namespace API {
  export namespace petV2 {
    /**
     * Everything about your Pets
     */
    export namespace pet {
      /**
       * Add a new pet to the store
       * /pet
       */
      export namespace addPet {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.petV2.Pet,
        ): Promise<any>;
      }

      /**
       * Update an existing pet
       * /pet
       */
      export namespace updatePet {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.petV2.Pet,
        ): Promise<any>;
      }

      /**
        * Finds Pets by status
Multiple status values can be provided with comma separated strings
        * /pet/findByStatus
        */
      export namespace findPetsByStatus {
        export class Params {
          /** Status values that need to be considered for filter */
          status: Array<string>;
        }

        export type Response = Array<defs.petV2.Pet>;
        export const init: Response;
        export function request(params: Params): Promise<Array<defs.petV2.Pet>>;
      }

      /**
        * Finds Pets by tags
Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
        * /pet/findByTags
        */
      export namespace findPetsByTags {
        export class Params {
          /** Tags to filter by */
          tags: Array<string>;
        }

        export type Response = Array<defs.petV2.Pet>;
        export const init: Response;
        export function request(params: Params): Promise<Array<defs.petV2.Pet>>;
      }

      /**
        * Find pet by ID
Returns a single pet
        * /pet/{petId}
        */
      export namespace getPetById {
        export class Params {
          /** ID of pet to return */
          petId: number;
        }

        export type Response = defs.petV2.Pet;
        export const init: Response;
        export function request(params: Params): Promise<defs.petV2.Pet>;
      }

      /**
       * Updates a pet in the store with form data
       * /pet/{petId}
       */
      export namespace updatePetWithForm {
        export class Params {
          /** ID of pet that needs to be updated */
          petId: number;
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
          petId: number;
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
          petId: number;
        }

        export type Response = defs.petV2.ApiResponse;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.petV2.ApiResponse>;
      }
    }

    /**
     * Access to Petstore orders
     */
    export namespace store {
      /**
        * Returns pet inventories by status
Returns a map of status codes to quantities
        * /store/inventory
        */
      export namespace getInventory {
        export class Params {}

        export type Response = ObjectMap<any, number>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<ObjectMap<any, number>>;
      }

      /**
       * Place an order for a pet
       * /store/order
       */
      export namespace placeOrder {
        export class Params {}

        export type Response = defs.petV2.Order;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.petV2.Order,
        ): Promise<defs.petV2.Order>;
      }

      /**
        * Find purchase order by ID
For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
        * /store/order/{orderId}
        */
      export namespace getOrderById {
        export class Params {
          /** ID of pet that needs to be fetched */
          orderId: number;
        }

        export type Response = defs.petV2.Order;
        export const init: Response;
        export function request(params: Params): Promise<defs.petV2.Order>;
      }

      /**
        * Delete purchase order by ID
For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
        * /store/order/{orderId}
        */
      export namespace deleteOrder {
        export class Params {
          /** ID of the order that needs to be deleted */
          orderId: number;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }
    }

    /**
     * Operations about user
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
        export function request(
          params: Params,
          bodyParams: defs.petV2.User,
        ): Promise<any>;
      }

      /**
       * Creates list of users with given input array
       * /user/createWithArray
       */
      export namespace createUsersWithArrayInput {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: Array<defs.petV2.User>,
        ): Promise<any>;
      }

      /**
       * Creates list of users with given input array
       * /user/createWithList
       */
      export namespace createUsersWithListInput {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: Array<defs.petV2.User>,
        ): Promise<any>;
      }

      /**
       * Logs user into the system
       * /user/login
       */
      export namespace loginUser {
        export class Params {
          /** The user name for login */
          username: string;
          /** The password for login in clear text */
          password: string;
        }

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
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
          username: string;
        }

        export type Response = defs.petV2.User;
        export const init: Response;
        export function request(params: Params): Promise<defs.petV2.User>;
      }

      /**
        * Updated user
This can only be done by the logged in user.
        * /user/{username}
        */
      export namespace updateUser {
        export class Params {
          /** name that need to be updated */
          username: string;
        }

        export type Response = any;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.petV2.User,
        ): Promise<any>;
      }

      /**
        * Delete user
This can only be done by the logged in user.
        * /user/{username}
        */
      export namespace deleteUser {
        export class Params {
          /** The name that needs to be deleted */
          username: string;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }
    }
  }
}
