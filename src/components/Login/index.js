import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ChangGio from "../ChangGio";
import { Page404 } from "../../pages/404";

class Login extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Login" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/ChangGio" component={ChangGio} />
        <Route component={Page404} />
      </Switch>
    );
  }
}

export default Login;
