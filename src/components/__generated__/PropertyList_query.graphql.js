/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PropertyItem_property$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PropertyList_query$ref: FragmentReference;
export type PropertyList_query = {|
  +allProperties: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: PropertyItem_property$ref,
      |}
    |}>
  |},
  +$refType: PropertyList_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PropertyList_query",
  "type": "Query",
  "metadata": null,
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
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "PropertyItem_property",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3f5063f6c94acf9f64b041f6ff91e2b2';
module.exports = node;
