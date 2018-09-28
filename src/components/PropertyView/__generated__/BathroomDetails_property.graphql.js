/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BathroomDetails_property$ref: FragmentReference;
export type BathroomDetails_property = {|
  +bathrooms: number,
  +ensuites: number,
  +$refType: BathroomDetails_property$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BathroomDetails_property",
  "type": "PropertyType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "name": "ensuites",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8f7974dafae1f31fa5ff93cc604f458f';
module.exports = node;
