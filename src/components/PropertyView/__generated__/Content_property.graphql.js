/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PhotoHeader_property$ref = any;
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
  +price: number,
  +$fragmentRefs: PhotoHeader_property$ref,
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
};
return {
  "kind": "Fragment",
  "name": "Content_property",
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
          "selections": [
            v0
          ]
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "price",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PhotoHeader_property",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '7f611808b6a388fff31f13262f13aaff';
module.exports = node;
