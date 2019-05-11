import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn'
import SignUp from './SignUp'
import { Page404 } from "../../pages/404";

class Login extends React.Component{    
    render() {    
        console.log("signIn")  ;
        return(    
            <div className="Login">
                <h1>Login</h1>
                <Switch>                   
                    <Route path="/Login" component={SignIn} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route component={Page404} />
                </Switch>
            </div>
        )
    }
}

export default Login;