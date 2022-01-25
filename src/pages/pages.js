import React from 'react';
import { Router } from '@reach/router';
import Login from './login/login';


const Pages = () => {
    return(
        <Router>
            <Login path="/" />
        </Router>
    )
}
export default Pages;