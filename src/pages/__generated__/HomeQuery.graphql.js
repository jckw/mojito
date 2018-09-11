/**
 * @flow
 * @relayHash 98435388619bb9c8aafc2f8ccba0c39e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MapListBrowse_query$ref = any;
export type HomeQueryVariables = {||};
export type HomeQueryResponse = {|
  +$fragmentRefs: MapListBrowse_query$ref
|};
export type HomeQuery = {|
  variables: HomeQueryVariables,
  response: HomeQueryResponse,
|};
*/


/*
query HomeQuery {
  ...MapListBrowse_query
}

fragment MapListBrowse_query on Query {
  filteredProperties(first: 10) {
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
}

fragment MapMarker_property on PropertyType {
  id
  location {
    coordinates
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10,
    "type": "Int"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  },
  v1
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HomeQuery",
  "id": null,
  "text": "query HomeQuery {\n  ...MapListBrowse_query\n}\n\nfragment MapListBrowse_query on Query {\n  filteredProperties(first: 10) {\n    edges {\n      node {\n        id\n        ...MapMarker_property\n        ...PropertyItem_property\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment MapMarker_property on PropertyType {\n  id\n  location {\n    coordinates\n  }\n}\n\nfragment PropertyItem_property on PropertyType {\n  id\n  street\n  area {\n    name\n    id\n  }\n  postcode\n  bedrooms\n  bathrooms\n  agency {\n    name\n    id\n  }\n  photos {\n    edges {\n      node {\n        photo\n        id\n      }\n    }\n  }\n  ...PriceTag_property\n}\n\nfragment PriceTag_property on PropertyType {\n  price\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "MapListBrowse_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "filteredProperties",
        "storageKey": "filteredProperties(first:10)",
        "args": v0,
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
                  v1,
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
                    "selections": v2
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
                    "selections": v2
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
                              v1
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
        "args": v0,
        "handle": "connection",
        "key": "MapListBrowse_filteredProperties",
        "filters": null
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a1e3a97ff999be21ecaf121e7f095c01';
module.exports = node;
