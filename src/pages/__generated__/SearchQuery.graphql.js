/**
 * @flow
 * @relayHash ebc2aa065ba26f9255defefa40669292
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MapListBrowse_query$ref = any;
export type SearchQueryVariables = {||};
export type SearchQueryResponse = {|
  +$fragmentRefs: MapListBrowse_query$ref
|};
export type SearchQuery = {|
  variables: SearchQueryVariables,
  response: SearchQueryResponse,
|};
*/


/*
query SearchQuery {
  ...MapListBrowse_query
}

fragment MapListBrowse_query on Query {
  filteredProperties {
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
}

fragment PropertyItem_property on PropertyType {
  id
  street
  slug
  area {
    name
    slug
    city {
      slug
      id
    }
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
  }
}

fragment PriceTag_property on PropertyType {
  price
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SearchQuery",
  "id": null,
  "text": "query SearchQuery {\n  ...MapListBrowse_query\n}\n\nfragment MapListBrowse_query on Query {\n  filteredProperties {\n    edges {\n      node {\n        id\n        ...MapMarker_property\n        ...PropertyItem_property\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...FilterRow_query\n}\n\nfragment MapMarker_property on PropertyType {\n  id\n  location {\n    coordinates\n  }\n}\n\nfragment PropertyItem_property on PropertyType {\n  id\n  street\n  slug\n  area {\n    name\n    slug\n    city {\n      slug\n      id\n    }\n    id\n  }\n  postcode\n  bedrooms\n  bathrooms\n  agency {\n    name\n    id\n  }\n  photos {\n    edges {\n      node {\n        photo\n        id\n      }\n    }\n  }\n  ...PriceTag_property\n}\n\nfragment FilterRow_query on Query {\n  meta {\n    maxBedrooms\n    minBedrooms\n    maxPrice\n    minPrice\n  }\n}\n\nfragment PriceTag_property on PropertyType {\n  price\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SearchQuery",
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
    "name": "SearchQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "filteredProperties",
        "storageKey": null,
        "args": null,
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
                  v0,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "street",
                    "args": null,
                    "storageKey": null
                  },
                  v1,
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
                      v1,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "city",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CityType",
                        "plural": false,
                        "selections": [
                          v1,
                          v0
                        ]
                      },
                      v0
                    ]
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
                    "selections": [
                      v2,
                      v0
                    ]
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
                              v0
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
        "args": null,
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
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1a14198112ec75c879a91b4d308c9255';
module.exports = node;