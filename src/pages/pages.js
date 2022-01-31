import React from 'react';
import { Router } from '@reach/router';
import Login from './login/login';
import Clients from './clients/clients';
import Dashboard from './dashboard/dashboard';
import Products from './products/products';
import Orders  from './orders/orders';
import Profile from './profile/profile';



const Pages = () => {
    return(
        <Router>
            <Login path="/" />
            <Dashboard path="/dashboard" />
            <Clients path="/clients" />
            <Products path="/products" />
            <Orders path="/orders" />
            <Profile path="/profile" />
        </Router>
    )
}
export default Pages;