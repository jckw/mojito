/**
 * @flow
 * @relayHash be09900ae6c375696cf927c173b65b16
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PropertySingle_property$ref = any;
export type PropertyQueryVariables = {|
  id: string
|};
export type PropertyQueryResponse = {|
  +property: ?{|
    +$fragmentRefs: PropertySingle_property$ref
  |}
|};
export type PropertyQuery = {|
  variables: PropertyQueryVariables,
  response: PropertyQueryResponse,
|};
*/


/*
query PropertyQuery(
  $id: ID!
) {
  property(id: $id) {
    ...PropertySingle_property
    id
  }
}

fragment PropertySingle_property on PropertyType {
  ...PropertyHeader_property
  ...PropertySidebar_property
  ...FeatureGrid_property
}

fragment PropertyHeader_property on PropertyType {
  street
  postcode
  singleBedrooms
  doubleBedrooms
  bathrooms
}

fragment PropertySidebar_property on PropertyType {
  ...CostsCard_property
  agency {
    ...AgencyCard_agency
    id
  }
}

fragment FeatureGrid_property on PropertyType {
  doubleBedrooms
  singleBedrooms
  totalArea
  bathrooms
  ensuites
  furnished
  dishwasher
  shower
  garden
  dryer
  washingMachine
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

fragment CostsCard_property on PropertyType {
  price
}

fragment AgencyCard_agency on LettingAgencyType {
  id
  name
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
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PropertyQuery",
  "id": null,
  "text": "query PropertyQuery(\n  $id: ID!\n) {\n  property(id: $id) {\n    ...PropertySingle_property\n    id\n  }\n}\n\nfragment PropertySingle_property on PropertyType {\n  ...PropertyHeader_property\n  ...PropertySidebar_property\n  ...FeatureGrid_property\n}\n\nfragment PropertyHeader_property on PropertyType {\n  street\n  postcode\n  singleBedrooms\n  doubleBedrooms\n  bathrooms\n}\n\nfragment PropertySidebar_property on PropertyType {\n  ...CostsCard_property\n  agency {\n    ...AgencyCard_agency\n    id\n  }\n}\n\nfragment FeatureGrid_property on PropertyType {\n  doubleBedrooms\n  singleBedrooms\n  totalArea\n  bathrooms\n  ensuites\n  furnished\n  dishwasher\n  shower\n  garden\n  dryer\n  washingMachine\n  fridge\n  freezer\n  stove\n  oven\n  airConditioning\n  kitchenTable\n  desksInRooms\n  doubleGlazing\n  bikeStorage\n  parkingSpace\n  fireAlarm\n  burglarAlarm\n}\n\nfragment CostsCard_property on PropertyType {\n  price\n}\n\nfragment AgencyCard_agency on LettingAgencyType {\n  id\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PropertyQuery",
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
            "name": "PropertySingle_property",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PropertyQuery",
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
            "name": "washingMachine",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "singleBedrooms",
            "args": null,
            "storageKey": null
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
            "name": "bathrooms",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "agency",
            "storageKey": null,
            "args": null,
            "concreteType": "LettingAgencyType",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalArea",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "ensuites",
            "args": null,
            "storageKey": null
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
            "name": "postcode",
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
            "name": "stove",
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
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8e72c8662871132296f82d65d992ee4b';
module.exports = node;
