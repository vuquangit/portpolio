import React from "react";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import { Switch, Route } from "react-router-dom";
import { Page404 } from "./pages/404";

function App() {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route path="/" component={Homepage} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
