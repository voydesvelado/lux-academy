import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Inicio from "./pages/Inicio";
import Galeria from "./pages/Galeria";
import "./Lux.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/galeria" exact component={Galeria} />
      </Switch>
    </Router>
  );
}

export default App;
