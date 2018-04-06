import React, { Component } from "react";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    );
  }
}

export default App;
