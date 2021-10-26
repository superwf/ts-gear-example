# TS-GEAR example

Initialized by Create React App.

## Example source

* [swagger v3 openapi spec](https://petstore3.swagger.io/api/v3/openapi.json)

## How to use

```sh
git clone https://github.com/superwf/ts-gear-example.git
cd ts-gear-example
```

check the code generated in `src/service`.

## Compare

Bad openapi doc compatible is the killer feature of `ts-gear` 💡.

See [openapi-typescript-introduction](https://superwf.github.io/openapi-typescript-introduction)(in Chinese🐼) for more information.

| tool |  bad doc compatible🌟 | comment output | Generic type | separate export | more language support | mock data | custom request logic | translate none english | filter api | openapi V2 & V3 |
| ---- | ---- | ----- | ----- | ---- | --- | --- | --- | --- | --- | --- |
| ts-gear | ✅ | ✅ | ✅<a href="#generic-type-👀">👀</a> | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pont | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ |
| openapi-generator | ❌ | ✅ | ✅<a href="#generic-type-👀">👀</a> | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ |
| swagger-codegen | ❌ | ✅ | ✅<a href="#generic-type-👀">👀</a> | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ |
| oazapfts | ❌ | ✔️(less) | ✅<a href="#generic-type-👀">👀</a>| ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

### Generic type 👀

Whether can generate correct generic type, depends on the complement of openapi doc definition.
