import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from './App';
import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';
import ModalConductor from './ModalConductor';

const Router = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/mydash' component={Dashboard} />
                <Route path='/store/:profile-section' component={ModalConductor} />
                <Route path='/store/:storeId' component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>
)

export default Router;
