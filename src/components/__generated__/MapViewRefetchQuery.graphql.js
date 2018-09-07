/**
 * @flow
 * @relayHash c7bc251163c1a6190a7e08c7d20fa794
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MapView_query$ref = any;
type PropertyList_query$ref = any;
export type MapViewRefetchQueryVariables = {|
  geometry: any
|};
export type MapViewRefetchQueryResponse = {|
  +$fragmentRefs: MapView_query$ref & PropertyList_query$ref
|};
export type MapViewRefetchQuery = {|
  variables: MapViewRefetchQueryVariables,
  response: MapViewRefetchQueryResponse,
|};
*/


/*
query MapViewRefetchQuery(
  $geometry: Geometry!
) {
  ...MapView_query_2HYTcD
  ...PropertyList_query_2HYTcD
}

fragment MapView_query_2HYTcD on Query {
  filteredProperties(location_Intersects: $geometry, first: 10) {
    edges {
      node {
        id
        ...MapMarker_property
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment PropertyList_query_2HYTcD on Query {
  filteredProperties(location_Intersects: $geometry, first: 10) {
    edges {
      node {
        id
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
}

fragment PropertyItem_property on PropertyType {
  id
  street
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

fragment PriceTag_property on PropertyType {
  price
}

fragment MapMarker_property on PropertyType {
  id
  location {
    coordinates
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "geometry",
    "type": "Geometry!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "geometry",
    "variableName": "geometry",
    "type": null
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10,
    "type": "Int"
  },
  {
    "kind": "Variable",
    "name": "location_Intersects",
    "variableName": "geometry",
    "type": "Geometry"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  },
  v3
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MapViewRefetchQuery",
  "id": null,
  "text": "query MapViewRefetchQuery(\n  $geometry: Geometry!\n) {\n  ...MapView_query_2HYTcD\n  ...PropertyList_query_2HYTcD\n}\n\nfragment MapView_query_2HYTcD on Query {\n  filteredProperties(location_Intersects: $geometry, first: 10) {\n    edges {\n      node {\n        id\n        ...MapMarker_property\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment PropertyList_query_2HYTcD on Query {\n  filteredProperties(location_Intersects: $geometry, first: 10) {\n    edges {\n      node {\n        id\n        ...PropertyItem_property\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment PropertyItem_property on PropertyType {\n  id\n  street\n  area {\n    name\n    id\n  }\n  postcode\n  bedrooms\n  bathrooms\n  agency {\n    name\n    id\n  }\n  photos {\n    edges {\n      node {\n        photo\n        id\n      }\n    }\n  }\n  ...PriceTag_property\n}\n\nfragment PriceTag_property on PropertyType {\n  price\n}\n\nfragment MapMarker_property on PropertyType {\n  id\n  location {\n    coordinates\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MapViewRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "MapView_query",
        "args": v1
      },
      {
        "kind": "FragmentSpread",
        "name": "PropertyList_query",
        "args": v1
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MapViewRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "filteredProperties",
        "storageKey": null,
        "args": v2,
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
                    "name": "postcode",
                    "args": null,
                    "storageKey": null
                  },
                  v3,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
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
                    "name": "bedrooms",
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
                    "name": "price",
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
        "args": v2,
        "handle": "connection",
        "key": "MapView_filteredProperties",
        "filters": [
          "location_Intersects"
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f45bb6f85556f569947b85a98ef2cbac';
module.exports = node;
