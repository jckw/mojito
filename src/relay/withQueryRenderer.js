import React from "react";
import { QueryRenderer } from "react-relay";
import environment from "./enviroment";

export default Component => ({ query, variables = {} }) => (
  <QueryRenderer
    environment={environment}
    query={query}
    variables={variables}
    render={({ error, props }) => {
      if (error) {
        return <div>Error!</div>;
      }
      if (!props) {
        return <div>Loading...</div>;
      }
      return <div>Works!</div>;
    }}
  />
);
