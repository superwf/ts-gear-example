# TS-GEAR example

Initialized by Create React App.

## How to use this example

```sh
git clone https://github.com/superwf/ts-gear-example.git
cd ts-gear-example
yarn // or npm install
```

check the code generated in `src/service`.

## 🆚 Compare

Bad openapi doc compatible is the killer feature of `ts-gear` 💡.

See [openapi-typescript-introduction](https://superwf.github.io/openapi-typescript-introduction)(in Chinese🐼) for more information.

### 5 tools && 5 openapi doc => 5x5 results

#### Swagger pet store openapi v2

Fixture source: [https://petstore.swagger.io/v2/swagger.json](https://petstore.swagger.io/v2/swagger.json)

- ✅ `ts-gear`

  - command: `yarn tsg -p tsGearPetV2`

  - result position: `src/service/tsGearPetV2`

  Actually, run `yarn tsg` will generate all service code configured in `src/tsg.config.ts`

- ✅ `pont`

  - command: `yarn pont`

  - result position: `src/service/pont/petV2`

  Actually, run once pont will generate all service code configured in `pont-config.json`

- ✅ `openapi-generator`

  - command: `yarn openapiGeneratorPetV2`

  - result position: `src/service/pont/openapiGeneratorPetV2`

- ✅ `swagger-codegen`

  - command: `yarn swaggerCodegenPetV2`

  - result position: `src/service/pont/swaggerCodegenPetV2`

- ✅ `oazapfts`

  - command: `yarn oazapftsPetV2`

  - result position: `src/service/pont/oazapftsPetV2`

All tools generate result successfully.

#### Swagger pet store openapi v3

Fixture source: [https://petstore3.swagger.io/api/v3/openapi.json](https://petstore3.swagger.io/api/v3/openapi.json)

- ✅ `ts-gear`

  - command: `yarn tsg -p tsGearPetV3`

  - result position: `src/service/tsGearPetV3`

- ✅ `pont`

  - command: `yarn pont`

  - result position: `src/service/pont/petV3`

- ✅ `openapi-generator`

  - command: `yarn openapiGeneratorPetV3`

  - result position: `src/service/pont/openapiGeneratorPetV3`

- ✅ `swagger-codegen`

  - command: `yarn swaggerCodegenPetV3`

  - result position: `src/service/pont/swaggerCodegenPetV3`

- ✅ `oazapfts`

  - command: `yarn oazapftsPetV3`

  - result position: `src/service/oazapftsPetV3.ts`

#### Bad defined example 1

Fixture source: [https://raw.githubusercontent.com/superwf/ts-gear-example/master/fixture/badDefined1.json](https://raw.githubusercontent.com/superwf/ts-gear-example/master/fixture/badDefined1.json)

- ✅ `ts-gear`

  - command: `yarn tsg -p tsGearBadDefined1`

  - result position: `src/service/tsGearBadDefined1`

- ✅ `pont`

  - command: `yarn pont`

  - result position: `src/service/pont/badDefined1`

- ❌ `openapi-generator`

  - command: `yarn openapiGeneratorBadDefined1`

  - result: `error Command failed with exit code 1`

- ✅ `swagger-codegen`

  - command: `yarn swaggerCodegenBadDefined1`

  - result position: `src/service/pont/swaggerCodegenBadDefined1`

- ❌ `oazapfts`

  - command: `yarn oazapftsBadDefined1`

  - result: `UnhandledPromiseRejectionWarning: MissingPointerError: Token "ReplyVO«PageVO«FieldDefListVO»»" does not exist`

### bad defined example 2

Fixture source: [https://raw.githubusercontent.com/superwf/ts-gear-example/master/fixture/badDefined2.json](https://raw.githubusercontent.com/superwf/ts-gear-example/master/fixture/badDefined2.json)

- ✅ `ts-gear`

  - command: `yarn tsg -p tsGearBadDefined2`

  - result position: `src/service/tsGearBadDefined2`

- ✅ `pont`

  - command: `yarn pont`

  - result position: `src/service/pont/badDefined2`

- ❌ `openapi-generator`

  - command: `yarn openapiGeneratorBadDefined2`

  - result: `error Command failed with exit code 1`

- ✅ `swagger-codegen`

  - command: `yarn swaggerCodegenBadDefined2`

  - result position: `src/service/pont/swaggerCodegenBadDefined2`

- ❌ `oazapfts`

  - command: `yarn oazapftsBadDefined2`

  - result: `UnhandledPromiseRejectionWarning: MissingPointerError: Token "ListVO" does not exist`

### bad defined example 3

Fixture source: [https://raw.githubusercontent.com/superwf/ts-gear-example/master/fixture/badDefined3.json](https://raw.githubusercontent.com/superwf/ts-gear-example/master/fixture/badDefined3.json)

- ✅ `ts-gear`

  - command: `yarn tsg -p tsGearBadDefined3`

  - result position: `src/service/tsGearBadDefined3`

- ✅ `pont`

  - command: `yarn pont`

  - result position: `src/service/pont/badDefined3`

- ❌ `openapi-generator`

  - command: `yarn openapiGeneratorBadDefined2`

  - result: `error Command failed with exit code 1`

- ✅ `swagger-codegen`

  - command: `yarn swaggerCodegenBadDefined2`

  - result position: `src/service/pont/swaggerCodegenBadDefined2`

- ❌ `oazapfts`

  - command: `yarn oazapftsBadDefined2`

  - result: `UnhandledPromiseRejectionWarning: MissingPointerError: Token "ListVO" does not exist`

run

```sh
tsg -p tsGearPetV2
```

| tool |  bad doc compatible🌟 | comment output | Generic type | separate export | more language support | mock data | custom request logic | translate none english | filter api | openapi V2 & V3 |
| ---- | ---- | ----- | ----- | ---- | --- | --- | --- | --- | --- | --- |
| ts-gear | ✅ | ✅ | ✅<a href="#generic-type-👀">👀</a> | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pont | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ |
| openapi-generator | ❌ | ✅ | ✅<a href="#generic-type-👀">👀</a> | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ |
| swagger-codegen | ❌ | ✅ | ✅<a href="#generic-type-👀">👀</a> | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ |
| oazapfts | ❌ | ✔️(less) | ✅<a href="#generic-type-👀">👀</a>| ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

### Generic type 👀

Whether can generate correct generic type, depends on the complement of openapi doc definition.
