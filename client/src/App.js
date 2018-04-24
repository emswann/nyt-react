import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid } from "react-bootstrap";
import Header from "./components/Header";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

const App = () => (
  <Router>
    <div>
      <Header />
      <Grid>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Saved} />
      </Grid>
    </div>
  </Router>
);

export default App;
