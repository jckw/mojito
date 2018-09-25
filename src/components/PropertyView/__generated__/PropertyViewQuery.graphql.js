/**
 * @flow
 * @relayHash 5649dec581e1e3b9e033f8c116e32aab
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PhotoHeader_property$ref = any;
export type PropertyViewQueryVariables = {|
  propertySlug: string,
  citySlug: string,
  areaSlug: string,
|};
export type PropertyViewQueryResponse = {|
  +property: ?{|
    +$fragmentRefs: PhotoHeader_property$ref
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
    ...PhotoHeader_property
    id
  }
}

fragment PhotoHeader_property on PropertyType {
  photos(first: 1) {
    edges {
      node {
        photo
        id
      }
    }
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
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PropertyViewQuery",
  "id": null,
  "text": "query PropertyViewQuery(\n  $propertySlug: String!\n  $citySlug: String!\n  $areaSlug: String!\n) {\n  property(propertySlug: $propertySlug, citySlug: $citySlug, areaSlug: $areaSlug) {\n    ...PhotoHeader_property\n    id\n  }\n}\n\nfragment PhotoHeader_property on PropertyType {\n  photos(first: 1) {\n    edges {\n      node {\n        photo\n        id\n      }\n    }\n  }\n}\n",
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
          {
            "kind": "FragmentSpread",
            "name": "PhotoHeader_property",
            "args": null
          }
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "photos",
            "storageKey": "photos(first:1)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 1,
                "type": "Int"
              }
            ],
            "concreteType": "PropertyPhotoConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "PropertyPhotoEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PropertyPhotoType",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "photo",
                        "args": null,
                        "storageKey": null
                      },
                      v2
                    ]
                  }
                ]
              }
            ]
          },
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2afbd5cd416559f2a1e2161ab397e6ad';
module.exports = node;
