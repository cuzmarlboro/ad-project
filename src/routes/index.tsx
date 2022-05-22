import React from 'react';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Index from 'pages/index';
import Login from 'pages/login';
import App from '../App';

const allRoutes = [
    {
        path: "/index",
        exact: false,
        component: Index,
        title: '',
    },
    {
        path: "/login",
        exact: false,
        component: Login,
        title: '',
    },
];

const AppWrap = withRouter(App);

const AppRoute = () => {
    return (
        <div>
            <Router>
                <AppWrap>
                    {
                        renderRoutes(allRoutes.map((item) => ({ ...item, key: item.path })))
                    }
                </AppWrap>
            </Router>
        </div>
    );
};

export default AppRoute;
