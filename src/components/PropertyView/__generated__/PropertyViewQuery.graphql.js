/**
 * @flow
 * @relayHash ce9c0592b310dd07498cb326ecf2fa2e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Content_property$ref = any;
export type PropertyViewQueryVariables = {|
  propertySlug: string,
  citySlug: string,
  areaSlug: string,
|};
export type PropertyViewQueryResponse = {|
  +property: ?{|
    +$fragmentRefs: Content_property$ref
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
    ...Content_property
    id
  }
}

fragment Content_property on PropertyType {
  street
  postcode
  area {
    name
    city {
      name
      id
    }
    id
  }
  price
  ...PhotoHeader_property
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
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
  "text": "query PropertyViewQuery(\n  $propertySlug: String!\n  $citySlug: String!\n  $areaSlug: String!\n) {\n  property(propertySlug: $propertySlug, citySlug: $citySlug, areaSlug: $areaSlug) {\n    ...Content_property\n    id\n  }\n}\n\nfragment Content_property on PropertyType {\n  street\n  postcode\n  area {\n    name\n    city {\n      name\n      id\n    }\n    id\n  }\n  price\n  ...PhotoHeader_property\n}\n\nfragment PhotoHeader_property on PropertyType {\n  photos(first: 1) {\n    edges {\n      node {\n        photo\n        id\n      }\n    }\n  }\n}\n",
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
            "name": "Content_property",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "street",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "postcode",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "area",
            "storageKey": null,
            "args": null,
            "concreteType": "CityAreaType",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "city",
                "storageKey": null,
                "args": null,
                "concreteType": "CityType",
                "plural": false,
                "selections": [
                  v2,
                  v3
                ]
              },
              v3
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "price",
            "args": null,
            "storageKey": null
          },
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
                      v3
                    ]
                  }
                ]
              }
            ]
          },
          v3
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a49131ff16cf5e46fe7629b2591d27c3';
module.exports = node;
