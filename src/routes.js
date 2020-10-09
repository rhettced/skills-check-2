import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import App from './App';

export default(
    <Switch>
        {/* <Route component={App} exact path='/'/> */}
        <Route component={Form} path='/form'/>
        <Route component={Form} path='/edit/:id'/>
        <Route component={Dashboard} path='/dashboard'/>
    </Switch>
);