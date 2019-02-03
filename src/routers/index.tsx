import * as React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import HomePage from 'src/components/views/HomePage';
import LoginPage from 'src/components/views/LoginPage';

const basename = '/';

const RoutersConfig = () => {
    return (
        <Router basename={basename}>
            <Switch>
                <Route path='/login' exact={true} component={LoginPage} />
                <Route path='/home' component={HomePage} />
                <Redirect to='/login' />
            </Switch>
        </Router>
    );
}

export default RoutersConfig;
