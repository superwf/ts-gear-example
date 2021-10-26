#! /bin/bash
yarn sc generate -l typescript-fetch -i https://petstore.swagger.io/v2/swagger.json -o ./src/service/swaggerCodegenPetV2
yarn sc generate -l typescript-fetch -i https://petstore3.swagger.io/api/v3/openapi.json -o ./src/service/swaggerCodegenPetV3
