import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
