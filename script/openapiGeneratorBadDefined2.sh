#! /bin/bash
yarn openapi-generator-cli generate -i ./fixture/badDefined2.json -g typescript-fetch -o ./src/service/openapiGeneratorBadDefined2
