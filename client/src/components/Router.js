import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/mydash' component={Dashboard} />
            <Route path='/store/:storeId' component={App} />
        </Switch>
    </BrowserRouter>
)

export default Router;
