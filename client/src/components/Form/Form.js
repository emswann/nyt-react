import React from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

const Form = props => (
  <form>
    <FormGroup
      controlId="topicInput"
    >
      <ControlLabel>Topic</ControlLabel>
      <FormControl
        type="text"
        name="topic"
        value={props.topic}
        onChange={props.handleInputChange}
      />
    </FormGroup>
    <FormGroup
      controlId="startYearInput"
    >
      <ControlLabel>Start Year</ControlLabel>
      <FormControl
        type="text"
        name="startYear"
        value={props.startYear}
        onChange={props.handleInputChange}
      />
    </FormGroup>
    <FormGroup
      controlId="endYearInput"
    >
      <ControlLabel>End Year</ControlLabel>
      <FormControl
        type="text"
        name="endYear"
        value={props.endYear}
        onChange={props.handleInputChange}
      />
    </FormGroup>
    <Button 
      disabled={!props.topic}
      bsStyle="primary" 
      type="submit"
      onClick={props.handleFormSubmit}
    >
      Search
    </Button>
  </form>
);

export default Form;
