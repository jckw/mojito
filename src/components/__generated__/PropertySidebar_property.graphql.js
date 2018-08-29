/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AgencyCard_agency$ref = any;
type CostsCard_property$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PropertySidebar_property$ref: FragmentReference;
export type PropertySidebar_property = {|
  +agency: {|
    +$fragmentRefs: AgencyCard_agency$ref
  |},
  +$fragmentRefs: CostsCard_property$ref,
  +$refType: PropertySidebar_property$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PropertySidebar_property",
  "type": "PropertyType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "CostsCard_property",
      "args": null
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
        {
          "kind": "FragmentSpread",
          "name": "AgencyCard_agency",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '361103fa819728171d7fefbc91a33f09';
module.exports = node;
