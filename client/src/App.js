import React, { Component } from "react";
import Landing from "./pages/Landing";
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/mydash" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
