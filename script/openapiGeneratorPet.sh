#! /bin/bash
yarn openapi-generator-cli generate -i https://petstore.swagger.io/v2/swagger.json -g typescript-fetch -o ./src/service/openapiGeneratorPetV2

yarn openapi-generator-cli generate -i https://petstore3.swagger.io/api/v3/openapi.json -g typescript-fetch -o ./src/service/openapiGeneratorPetV3
