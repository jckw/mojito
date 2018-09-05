/**
 * @flow
 * @relayHash ba43d7bfa58d95a28a14c1f393ebb3f1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PropertyViewQueryVariables = {|
  id: string
|};
export type PropertyViewQueryResponse = {|
  +property: ?{|
    +street: string,
    +area: {|
      +name: string
    |},
    +postcode: string,
  |}
|};
export type PropertyViewQuery = {|
  variables: PropertyViewQueryVariables,
  response: PropertyViewQueryResponse,
|};
*/


/*
query PropertyViewQuery(
  $id: ID!
) {
  property(id: $id) {
    street
    area {
      name
      id
    }
    postcode
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "street",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "postcode",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PropertyViewQuery",
  "id": null,
  "text": "query PropertyViewQuery(\n  $id: ID!\n) {\n  property(id: $id) {\n    street\n    area {\n      name\n      id\n    }\n    postcode\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PropertyViewQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "property",
        "storageKey": null,
        "args": v1,
        "concreteType": "PropertyType",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "area",
            "storageKey": null,
            "args": null,
            "concreteType": "CityAreaType",
            "plural": false,
            "selections": [
              v3
            ]
          },
          v4
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PropertyViewQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "property",
        "storageKey": null,
        "args": v1,
        "concreteType": "PropertyType",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "area",
            "storageKey": null,
            "args": null,
            "concreteType": "CityAreaType",
            "plural": false,
            "selections": [
              v3,
              v5
            ]
          },
          v4,
          v5
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '699cdac2ef11945f6a3d3bb2dea95a61';
module.exports = node;
