import React from 'react';
import { View, Text } from '@material-ui/icons';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// Admin Screen
    import Home from './admin/screens/Home';
    import Login from "./admin/auth/Login"

const Routes = () => {
    return (
        <BrowserRouter>
        
            <Switch>
                <Route exact path="/" component={Home}/>  
                <Route exact path="/login" component={Login}/>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;