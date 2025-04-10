import React from "react";
import Wrapper from "./Components/Wrapper";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Wrapper} />
        <Route path="/:brand" component={Wrapper} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
