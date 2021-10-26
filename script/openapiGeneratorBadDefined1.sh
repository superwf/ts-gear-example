#! /bin/bash
yarn openapi-generator-cli generate -i ./fixture/badDefined1.json -g typescript-fetch -o ./src/service/openapiGeneratorBadDefined1
