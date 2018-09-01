/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PropertyPhotosContainer_property$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PropertyHeader_property$ref: FragmentReference;
export type PropertyHeader_property = {|
  +street: string,
  +postcode: string,
  +singleBedrooms: number,
  +doubleBedrooms: number,
  +bathrooms: number,
  +$fragmentRefs: PropertyPhotosContainer_property$ref,
  +$refType: PropertyHeader_property$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PropertyHeader_property",
  "type": "PropertyType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "street",
      "args": null,
      "storageKey": null
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
      "name": "singleBedrooms",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "doubleBedrooms",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "bathrooms",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PropertyPhotosContainer_property",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b0f840f0c181b22477f7b68296d9bc53';
module.exports = node;
