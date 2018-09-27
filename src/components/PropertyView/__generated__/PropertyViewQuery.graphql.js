/**
 * @flow
 * @relayHash 917333f4244b5114768de74b631029a3
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
  bedrooms
  ...PhotoHeader_property
  ...FeatureGrid_property
  ...SideCard_property
  ...BedroomDetails_property
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

fragment FeatureGrid_property on PropertyType {
  furnished
  dishwasher
  bath
  shower
  garden
  dryer
  washingMachine
  microwave
  fridge
  freezer
  stove
  oven
  airConditioning
  kitchenTable
  desksInRooms
  doubleGlazing
  bikeStorage
  parkingSpace
  fireAlarm
  burglarAlarm
}

fragment SideCard_property on PropertyType {
  price
  totalPrice
  ...AgencyHeader_property
}

fragment BedroomDetails_property on PropertyType {
  doubleBedrooms
  singleBedrooms
}

fragment AgencyHeader_property on PropertyType {
  agency {
    name
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
},
v4 = [
  v2,
  v3
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PropertyViewQuery",
  "id": null,
  "text": "query PropertyViewQuery(\n  $propertySlug: String!\n  $citySlug: String!\n  $areaSlug: String!\n) {\n  property(propertySlug: $propertySlug, citySlug: $citySlug, areaSlug: $areaSlug) {\n    ...Content_property\n    id\n  }\n}\n\nfragment Content_property on PropertyType {\n  street\n  postcode\n  area {\n    name\n    city {\n      name\n      id\n    }\n    id\n  }\n  bedrooms\n  ...PhotoHeader_property\n  ...FeatureGrid_property\n  ...SideCard_property\n  ...BedroomDetails_property\n}\n\nfragment PhotoHeader_property on PropertyType {\n  photos(first: 1) {\n    edges {\n      node {\n        photo\n        id\n      }\n    }\n  }\n}\n\nfragment FeatureGrid_property on PropertyType {\n  furnished\n  dishwasher\n  bath\n  shower\n  garden\n  dryer\n  washingMachine\n  microwave\n  fridge\n  freezer\n  stove\n  oven\n  airConditioning\n  kitchenTable\n  desksInRooms\n  doubleGlazing\n  bikeStorage\n  parkingSpace\n  fireAlarm\n  burglarAlarm\n}\n\nfragment SideCard_property on PropertyType {\n  price\n  totalPrice\n  ...AgencyHeader_property\n}\n\nfragment BedroomDetails_property on PropertyType {\n  doubleBedrooms\n  singleBedrooms\n}\n\nfragment AgencyHeader_property on PropertyType {\n  agency {\n    name\n    id\n  }\n}\n",
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
            "name": "stove",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "street",
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
                "selections": v4
              },
              v3
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "bedrooms",
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "furnished",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "dishwasher",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "bath",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "shower",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "garden",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "dryer",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "washingMachine",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "microwave",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "fridge",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "freezer",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "oven",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "airConditioning",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "kitchenTable",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "desksInRooms",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "doubleGlazing",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "bikeStorage",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "parkingSpace",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "fireAlarm",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "burglarAlarm",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "price",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalPrice",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "agency",
            "storageKey": null,
            "args": null,
            "concreteType": "LettingAgencyType",
            "plural": false,
            "selections": v4
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "doubleBedrooms",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "singleBedrooms",
            "args": null,
            "storageKey": null
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
