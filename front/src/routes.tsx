import { Route } from 'react-router';
import * as React from 'react';
import HomeView from './views/HomeView';
import InfoView from './views/InfoView';

export default () => (
    <React.Fragment>
        <Route exact={true} path="/" component={HomeView}/>
        <Route exact={true} path="/info" component={InfoView}/>
    </React.Fragment>
)
