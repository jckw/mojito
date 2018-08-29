/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FeatureGrid_property$ref = any;
type PropertyHeader_property$ref = any;
type PropertySidebar_property$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PropertySingle_property$ref: FragmentReference;
export type PropertySingle_property = {|
  +$fragmentRefs: PropertyHeader_property$ref & PropertySidebar_property$ref & FeatureGrid_property$ref,
  +$refType: PropertySingle_property$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PropertySingle_property",
  "type": "PropertyType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "PropertyHeader_property",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PropertySidebar_property",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FeatureGrid_property",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '17904a602d78fc7e35339cd79575beb5';
module.exports = node;
