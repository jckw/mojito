/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PriceTag_property$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PropertyItem_property$ref: FragmentReference;
export type PropertyItem_property = {|
  +id: string,
  +street: string,
  +slug: string,
  +area: {|
    +name: string,
    +slug: string,
    +city: {|
      +slug: string
    |},
  |},
  +postcode: string,
  +bedrooms: number,
  +bathrooms: number,
  +agency: ?{|
    +name: string
  |},
  +photos: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +photo: string
      |}
    |}>
  |},
  +$fragmentRefs: PriceTag_property$ref,
  +$refType: PropertyItem_property$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "PropertyItem_property",
  "type": "PropertyType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "street",
      "args": null,
      "storageKey": null
    },
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "area",
      "storageKey": null,
      "args": null,
      "concreteType": "CityAreaType",
      "plural": false,
      "selections": [
        v1,
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
      "name": "postcode",
      "args": null,
      "storageKey": null
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
      "name": "bathrooms",
      "args": null,
      "storageKey": null
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
        v1
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "photos",
      "storageKey": null,
      "args": null,
      "concreteType": "PropertyPhotoConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "PropertyPhotoEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "PropertyPhotoType",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "photo",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "PriceTag_property",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '364468e6a0e2a0aac78dec1f8e2262a2';
module.exports = node;
