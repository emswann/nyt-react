import React from "react";
import { Panel } from "react-bootstrap";
import Form from "../Form";

const Search = props => (
  <Panel>
    <Panel.Heading className="text-center">
      <Panel.Title>
        <h1>Search</h1>
      </Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      <Form
        topic={props.topic}
        startYear={props.startYear}
        endYear={props.endYear}
        handleInputChange={props.handleInputChange}
        handleFormSubmit={props.handleFormSubmit}              
      />
    </Panel.Body>
  </Panel>
);

export default Search;
