/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AreaDetails_property$ref = any;
type BathroomDetails_property$ref = any;
type BedroomDetails_property$ref = any;
type FeatureGrid_property$ref = any;
type PhotoHeader_property$ref = any;
type SideCard_property$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Content_property$ref: FragmentReference;
export type Content_property = {|
  +street: string,
  +postcode: string,
  +area: {|
    +name: string,
    +city: {|
      +name: string
    |},
  |},
  +variant: {|
    +name: string
  |},
  +bedrooms: number,
  +$fragmentRefs: PhotoHeader_property$ref & FeatureGrid_property$ref & SideCard_property$ref & BedroomDetails_property$ref & BathroomDetails_property$ref & AreaDetails_property$ref,
  +$refType: Content_property$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = [
  v0
];
return {
  "kind": "Fragment",
  "name": "Content_property",
  "type": "PropertyType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "PhotoHeader_property",
      "args": null
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
        v0,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "city",
          "storageKey": null,
          "args": null,
          "concreteType": "CityType",
          "plural": false,
          "selections": v1
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "variant",
      "storageKey": null,
      "args": null,
      "concreteType": "PropertyVariantType",
      "plural": false,
      "selections": v1
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
      "name": "postcode",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FeatureGrid_property",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SideCard_property",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "BedroomDetails_property",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "BathroomDetails_property",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AreaDetails_property",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '138b5d282bd98b6e6a65f14f2678cb07';
module.exports = node;
