/**
 * @flow
 * @relayHash c29d3480f1207d68faae68c56b4e33a3
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
  $propertySlug: String!
  $citySlug: String!
  $areaSlug: String!
) {
  property(propertySlug: $propertySlug, citySlug: $citySlug, areaSlug: $areaSlug) {
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
  "text": "query PropertyViewQuery(\n  $propertySlug: String!\n  $citySlug: String!\n  $areaSlug: String!\n) {\n  property(propertySlug: $propertySlug, citySlug: $citySlug, areaSlug: $areaSlug) {\n    street\n    area {\n      name\n      id\n    }\n    postcode\n    id\n  }\n}\n",
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
(node/*: any*/).hash = '3bb1d328780c8fe3957e44e5846bb6b9';
module.exports = node;
