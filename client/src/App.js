import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "react-bootstrap";
import Header from "./components/Header";
import NYT from "./pages/NYT";
import NoMatch from "./components/NoMatch";

const App = () => (
  <Router>
    <div>
      <Header />
      <Grid>
        <Switch>
          <Route exact path="/" component={NYT} />
          <Route component={NoMatch} />
        </Switch>
      </Grid>
    </div>
  </Router>
);

export default App;
