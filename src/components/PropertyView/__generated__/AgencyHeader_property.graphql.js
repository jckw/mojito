/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AgencyHeader_property$ref: FragmentReference;
export type AgencyHeader_property = {|
  +agency: ?{|
    +name: string
  |},
  +$refType: AgencyHeader_property$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AgencyHeader_property",
  "type": "PropertyType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "agency",
      "storageKey": null,
      "args": null,
      "concreteType": "LettingAgencyType",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3fb79557abc2adbc1fdce75eb8f90eec';
module.exports = node;
