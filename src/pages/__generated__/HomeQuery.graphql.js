/**
 * @flow
 * @relayHash 35c21f3d795d204241707551154bef97
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PropertyList_query$ref = any;
export type HomeQueryVariables = {||};
export type HomeQueryResponse = {|
  +$fragmentRefs: PropertyList_query$ref
|};
export type HomeQuery = {|
  variables: HomeQueryVariables,
  response: HomeQueryResponse,
|};
*/


/*
query HomeQuery {
  ...PropertyList_query
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
  "name": "HomeQuery",
  "id": null,
  "text": "query HomeQuery {\n  ...PropertyList_query\n}\n\nfragment PropertyList_query on Query {\n  allProperties {\n    edges {\n      node {\n        id\n        ...PropertyItem_property\n      }\n    }\n  }\n}\n\nfragment PropertyItem_property on PropertyType {\n  id\n  street\n  area {\n    name\n    id\n  }\n  postcode\n  price\n  bedrooms\n  bathrooms\n}\n",
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
        "name": "PropertyList_query",
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
(node/*: any*/).hash = '65214a8d9e8fbb80fa12c3eb9eeb8c12';
module.exports = node;
