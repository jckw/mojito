/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FilterRow_query$ref = any;
type MapMarker_property$ref = any;
type PropertyItem_property$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MapListBrowse_query$ref: FragmentReference;
export type MapListBrowse_query = {|
  +filteredProperties: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: MapMarker_property$ref & PropertyItem_property$ref,
      |}
    |}>
  |},
  +$fragmentRefs: FilterRow_query$ref,
  +$refType: MapListBrowse_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MapListBrowse_query",
  "type": "Query",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "filteredProperties"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 10
    },
    {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "geometry",
      "type": "Geometry",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "minPrice",
      "type": "Float",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "maxPrice",
      "type": "Float",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "minBedrooms",
      "type": "Float",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "maxBedrooms",
      "type": "Float",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "filteredProperties",
      "name": "__MapListBrowse_filteredProperties_connection",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "bedrooms_Gte",
          "variableName": "minBedrooms",
          "type": "Float"
        },
        {
          "kind": "Variable",
          "name": "bedrooms_Lte",
          "variableName": "maxBedrooms",
          "type": "Float"
        },
        {
          "kind": "Variable",
          "name": "location_Intersects",
          "variableName": "geometry",
          "type": "Geometry"
        },
        {
          "kind": "Variable",
          "name": "price_Gte",
          "variableName": "minPrice",
          "type": "Float"
        },
        {
          "kind": "Variable",
          "name": "price_Lte",
          "variableName": "maxPrice",
          "type": "Float"
        }
      ],
      "concreteType": "PropertyTypeConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "PropertyTypeEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "PropertyType",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "MapMarker_property",
                  "args": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "PropertyItem_property",
                  "args": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "FilterRow_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e4951f52e4b45f2e72e7a51d4e35cf05';
module.exports = node;
