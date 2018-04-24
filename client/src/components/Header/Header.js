import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./Header.css";

const Header = () => (
  <Jumbotron className="text-center">
    <h1><u>New York Times Article Scrubber</u></h1>
    <p>
      Search for and annotate articles of interest!
    </p>
  </Jumbotron>
);

export default Header;
