/**
 * @flow
 * @relayHash 460ee6eb97b2846a7c1c1f4f68d3872b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PropertyViewQueryVariables = {|
  propertySlug: string,
  citySlug: string,
  areaSlug: string,
|};
export type PropertyViewQueryResponse = {|
  +property: ?{|
    +id: string
  |}
|};
export type PropertyViewQuery = {|
  variables: PropertyViewQueryVariables,
  response: PropertyViewQueryResponse,
|};
*/


/*
query PropertyViewQuery(
  $propertySlug: String!
  $citySlug: String!
  $areaSlug: String!
) {
  property(propertySlug: $propertySlug, citySlug: $citySlug, areaSlug: $areaSlug) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "propertySlug",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "citySlug",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "areaSlug",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "property",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "areaSlug",
        "variableName": "areaSlug",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "citySlug",
        "variableName": "citySlug",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "propertySlug",
        "variableName": "propertySlug",
        "type": "String!"
      }
    ],
    "concreteType": "PropertyType",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PropertyViewQuery",
  "id": null,
  "text": "query PropertyViewQuery(\n  $propertySlug: String!\n  $citySlug: String!\n  $areaSlug: String!\n) {\n  property(propertySlug: $propertySlug, citySlug: $citySlug, areaSlug: $areaSlug) {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PropertyViewQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "PropertyViewQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3a0412ea8cfd42315bca0527ac7ce943';
module.exports = node;
