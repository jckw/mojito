/**
 * @flow
 * @relayHash 8c665224a168face4022f39394b0d383
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MapView_query$ref = any;
type PropertyList_query$ref = any;
export type MapViewRefetchQueryVariables = {||};
export type MapViewRefetchQueryResponse = {|
  +$fragmentRefs: MapView_query$ref & PropertyList_query$ref
|};
export type MapViewRefetchQuery = {|
  variables: MapViewRefetchQueryVariables,
  response: MapViewRefetchQueryResponse,
|};
*/


/*
query MapViewRefetchQuery {
  ...MapView_query
  ...PropertyList_query
}

fragment MapView_query on Query {
  allProperties {
    edges {
      node {
        id
        ...MapMarker_property
      }
    }
  }
}

fragment PropertyList_query on Query {
  allProperties {
    edges {
      node {
        id
        ...PropertyItem_property
      }
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
  price
  bedrooms
  bathrooms
}

fragment MapMarker_property on PropertyType {
  id
  location {
    coordinates
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MapViewRefetchQuery",
  "id": null,
  "text": "query MapViewRefetchQuery {\n  ...MapView_query\n  ...PropertyList_query\n}\n\nfragment MapView_query on Query {\n  allProperties {\n    edges {\n      node {\n        id\n        ...MapMarker_property\n      }\n    }\n  }\n}\n\nfragment PropertyList_query on Query {\n  allProperties {\n    edges {\n      node {\n        id\n        ...PropertyItem_property\n      }\n    }\n  }\n}\n\nfragment PropertyItem_property on PropertyType {\n  id\n  street\n  area {\n    name\n    id\n  }\n  postcode\n  price\n  bedrooms\n  bathrooms\n}\n\nfragment MapMarker_property on PropertyType {\n  id\n  location {\n    coordinates\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MapViewRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "MapView_query",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "PropertyList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MapViewRefetchQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allProperties",
        "storageKey": null,
        "args": null,
        "concreteType": "PropertyConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "PropertyEdge",
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
                  v0,
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "price",
                    "args": null,
                    "storageKey": null
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
(node/*: any*/).hash = '5be51d4a549be86f8ce475b9eb557676';
module.exports = node;
