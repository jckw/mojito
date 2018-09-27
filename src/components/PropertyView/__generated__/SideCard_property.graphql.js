/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AgencyHeader_property$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SideCard_property$ref: FragmentReference;
export type SideCard_property = {|
  +price: number,
  +totalPrice: number,
  +$fragmentRefs: AgencyHeader_property$ref,
  +$refType: SideCard_property$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "SideCard_property",
  "type": "PropertyType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "name": "totalPrice",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AgencyHeader_property",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a73f7273c9db4bcd2a215852de206d8e';
module.exports = node;
