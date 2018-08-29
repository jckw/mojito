/**
 * @flow
 * @relayHash 339b6ffdd56a012b7d502c2374bbf1d3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AgencyQueryVariables = {|
  id: string
|};
export type AgencyQueryResponse = {|
  +agency: ?{|
    +name: string
  |}
|};
export type AgencyQuery = {|
  variables: AgencyQueryVariables,
  response: AgencyQueryResponse,
|};
*/


/*
query AgencyQuery(
  $id: ID!
) {
  agency(id: $id) {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AgencyQuery",
  "id": null,
  "text": "query AgencyQuery(\n  $id: ID!\n) {\n  agency(id: $id) {\n    name\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AgencyQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "agency",
        "storageKey": null,
        "args": v1,
        "concreteType": "LettingAgencyType",
        "plural": false,
        "selections": [
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AgencyQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "agency",
        "storageKey": null,
        "args": v1,
        "concreteType": "LettingAgencyType",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd449ce82e341b27089322b385c751667';
module.exports = node;
