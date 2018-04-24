import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "react-bootstrap";
import Header from "./components/Header";
import NYT from "./pages/NYT";
import NoMatch from "./components/NoMatch";

const styles = {
  body: {
    backgroundColor: "#f5f5f5"
  },
  grid: {
    backgroundColor: "#d08975"
  }
}
const App = () => (
  <Router>
    <div style={styles.body}>
      <Header />
      <Grid style={styles.grid}>
        <Switch>
          <Route exact path="/" component={NYT} />
          <Route component={NoMatch} />
        </Switch>
      </Grid>
    </div>
  </Router>
);

export default App;
