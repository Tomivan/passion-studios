import React from 'react';
import { Router } from '@reach/router';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';


const Pages = () => {
    return(
        <Router>
            <Login path="/" />
            <Dashboard path="/dashboard" />
        </Router>
    )
}
export default Pages;