/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type LeaseInfo_property$ref: FragmentReference;
export type LeaseInfo_property = {|
  +leaseLengthMonths: ?number,
  +leaseStartDate: ?any,
  +$refType: LeaseInfo_property$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "LeaseInfo_property",
  "type": "PropertyType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "leaseLengthMonths",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "leaseStartDate",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '6a3f2948b4711343ff67745c0b43a8bb';
module.exports = node;
