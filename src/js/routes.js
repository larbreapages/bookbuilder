import React from 'react';
import { Route, Redirect } from 'react-router';
import NotFound from './components/NotFound';
import App from './components/App';

const Routes = (
    <Route>
        <Route path="/" component={App} />
        <Route path="/404" components={NotFound} />
        <Redirect from="*" to="/404" />
    </Route>
);

export default Routes;
