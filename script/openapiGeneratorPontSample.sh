#! /bin/bash
yarn openapi-generator-cli generate -i ./fixture/pont.json -g typescript-fetch -o ./src/service/openapiGeneratorPont
