import React from 'react';
import { Router } from '@reach/router';
import Login from './login/login';
import Clients from './clients/clients';
import Dashboard from './dashboard/dashboard';
import Products from './products/products';
import Invoice from './invoice/invoice';
import Orders  from './orders/orders';
import Profile from './profile/profile';
import Setting from './setting/setting'


const Pages = () => {
    return(
        <Router>
            <Login path="/" />
            <Dashboard path="/dashboard" />
            <Clients path="/clients" />
            <Products path="/products" />
            <Invoice path="/invoice" />
            <Orders path="/orders" />
            <Profile path="/profile" />
            <Setting path="/setting" />
        </Router>
    )
}
export default Pages;