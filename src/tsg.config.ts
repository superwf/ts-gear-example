/**
 * each project will use the "requester" function when request remote api
 * so this file would be included into your source file when compile
 * */
import type { Project } from 'ts-gear'

const importRequesterStatement =
  'import { requester } from "../../tsGearRequester"'

const projects: Project[] = [
  {
    name: 'tsGearPetV2',
    dest: 'service',
    source: 'https://petstore.swagger.io/v2/swagger.json',
    importRequesterStatement,
  },
  {
    name: 'tsGearPetV3',
    dest: 'service',
    source: 'https://petstore3.swagger.io/api/v3/openapi.json',
    importRequesterStatement,
  },
  {
    name: 'tsGearBadDefined1',
    dest: 'service',
    source: '../fixture/badDefined1.json',
    importRequesterStatement,
  },
  {
    name: 'tsGearBadDefined2',
    dest: 'service',
    source: '../fixture/badDefined2.json',
    importRequesterStatement,
  },
  {
    name: 'tsGearPontSample',
    dest: 'service',
    source: '../fixture/pont.json',
    translationEngine: 'google',
    importRequesterStatement,
  },
]

export default projects
