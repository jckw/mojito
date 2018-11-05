/**
 * @flow
 * @relayHash 48aa26d09dc71c25a4d8f1bb9750b1b5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MapListBrowse_query$ref = any;
export type MapListBrowseForwardQueryVariables = {|
  count: number,
  cursor?: ?string,
  geometry?: ?any,
  minPrice?: ?number,
  maxPrice?: ?number,
  minBedrooms?: ?number,
  maxBedrooms?: ?number,
|};
export type MapListBrowseForwardQueryResponse = {|
  +$fragmentRefs: MapListBrowse_query$ref
|};
export type MapListBrowseForwardQuery = {|
  variables: MapListBrowseForwardQueryVariables,
  response: MapListBrowseForwardQueryResponse,
|};
*/


/*
query MapListBrowseForwardQuery(
  $count: Int!
  $cursor: String
  $geometry: Geometry
  $minPrice: Float
  $maxPrice: Float
  $minBedrooms: Float
  $maxBedrooms: Float
) {
  ...MapListBrowse_query_4C0LBB
}

fragment MapListBrowse_query_4C0LBB on Query {
  filteredProperties(first: $count, after: $cursor, location_Intersects: $geometry, price_Gte: $minPrice, price_Lte: $maxPrice, bedrooms_Gte: $minBedrooms, bedrooms_Lte: $maxBedrooms) {
    edges {
      node {
        id
        ...MapMarker_property
        ...PropertyItem_property
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  ...FilterRow_query
}

fragment MapMarker_property on PropertyType {
  id
  location {
    coordinates
  }
  url
}

fragment PropertyItem_property on PropertyType {
  id
  street
  url
  area {
    name
    id
  }
  postcode
  bedrooms
  bathrooms
  agency {
    name
    id
  }
  photos {
    edges {
      node {
        photo
        id
      }
    }
  }
  ...PriceTag_property
}

fragment FilterRow_query on Query {
  meta {
    maxBedrooms
    minBedrooms
    maxPrice
    minPrice
    landmarks {
      edges {
        node {
          id
          name
        }
      }
    }
  }
}

fragment PriceTag_property on PropertyType {
  price
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
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
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor",
    "type": "String"
  },
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
    "name": "first",
    "variableName": "count",
    "type": "Int"
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
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
v4 = [
  v3,
  v2
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MapListBrowseForwardQuery",
  "id": null,
  "text": "query MapListBrowseForwardQuery(\n  $count: Int!\n  $cursor: String\n  $geometry: Geometry\n  $minPrice: Float\n  $maxPrice: Float\n  $minBedrooms: Float\n  $maxBedrooms: Float\n) {\n  ...MapListBrowse_query_4C0LBB\n}\n\nfragment MapListBrowse_query_4C0LBB on Query {\n  filteredProperties(first: $count, after: $cursor, location_Intersects: $geometry, price_Gte: $minPrice, price_Lte: $maxPrice, bedrooms_Gte: $minBedrooms, bedrooms_Lte: $maxBedrooms) {\n    edges {\n      node {\n        id\n        ...MapMarker_property\n        ...PropertyItem_property\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...FilterRow_query\n}\n\nfragment MapMarker_property on PropertyType {\n  id\n  location {\n    coordinates\n  }\n  url\n}\n\nfragment PropertyItem_property on PropertyType {\n  id\n  street\n  url\n  area {\n    name\n    id\n  }\n  postcode\n  bedrooms\n  bathrooms\n  agency {\n    name\n    id\n  }\n  photos {\n    edges {\n      node {\n        photo\n        id\n      }\n    }\n  }\n  ...PriceTag_property\n}\n\nfragment FilterRow_query on Query {\n  meta {\n    maxBedrooms\n    minBedrooms\n    maxPrice\n    minPrice\n    landmarks {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n\nfragment PriceTag_property on PropertyType {\n  price\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MapListBrowseForwardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "MapListBrowse_query",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "geometry",
            "variableName": "geometry",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "maxBedrooms",
            "variableName": "maxBedrooms",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "maxPrice",
            "variableName": "maxPrice",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "minBedrooms",
            "variableName": "minBedrooms",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "minPrice",
            "variableName": "minPrice",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MapListBrowseForwardQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "filteredProperties",
        "storageKey": null,
        "args": v1,
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
                    "name": "bedrooms",
                    "args": null,
                    "storageKey": null
                  },
                  v2,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "url",
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
                    "selections": v4
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
                    "name": "location",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "GeometryObjectType",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "coordinates",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "bathrooms",
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
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "photos",
                    "storageKey": null,
                    "args": null,
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
        "kind": "LinkedHandle",
        "alias": null,
        "name": "filteredProperties",
        "args": v1,
        "handle": "connection",
        "key": "MapListBrowse_filteredProperties",
        "filters": [
          "location_Intersects",
          "price_Gte",
          "price_Lte",
          "bedrooms_Gte",
          "bedrooms_Lte"
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "meta",
        "storageKey": null,
        "args": null,
        "concreteType": "MetaType",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "maxBedrooms",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "minBedrooms",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "maxPrice",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "minPrice",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "landmarks",
            "storageKey": null,
            "args": null,
            "concreteType": "LandmarkConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "LandmarkEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LandmarkType",
                    "plural": false,
                    "selections": [
                      v2,
                      v3
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bd77bc84c6c1068c04b19a1a6629c1ac';
module.exports = node;
