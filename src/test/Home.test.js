import React from "react";
import { act } from 'react-dom/test-utils'
import { mount } from "enzyme";
import { ApolloProvider } from "react-apollo-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import createClient from "./mockServe";
import gql from "graphql-tag";
import Home from "../views/Home";
import MapZones from "../components/MapZones";

const waitRequest = () => new Promise(resolve => setTimeout(resolve,3000));

describe("<Home />", () => {
  it("Home Rendes Correctly", () => {
    const client = createClient();
    const component = mount(
      <ApolloProvider client={client}>
        <Router>
          <Home />
        </Router>
      </ApolloProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it("Render if Map works in Home", async () => {
    await act(async() => {
     // const testRequest =  () => {
        const client = createClient();
        const component = mount(
          <ApolloProvider client={client}>
            <Router>
              <Home />
            </Router>
          </ApolloProvider>
        );
        await waitRequest();
        expect(component.find(MapZones)).toHaveLength(1);
      //};

     // testRequest();

    });
  });
});
