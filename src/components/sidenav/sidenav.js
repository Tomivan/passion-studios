import React from 'react';
import { SideNavItems, SideNavMenuItem } from 'carbon-components-react/lib/components/UIShell';
import Dashboard from '../../assets/images/dashboard.png';
import Clipboard from '../../assets/images/clipboard.png';
import Clients from '../../assets/images/clients.png';
import Product from '../../assets/images/product.png';
import Profile from '../../assets/images/profile.png';
import './sidenav.css';
import { StyledSideNav } from './style';

const Sidenav = () => {
    return(
        <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side Navigation" className="sidenav">
           <div className="nav-heading">
               <h1>Passion Studio</h1>
           </div>
           <SideNavItems>
            <SideNavMenuItem href="/dashboard"><img src={Dashboard} alt="Dashboard icon" className="nav-icon"/>Dashboard</SideNavMenuItem>
            <SideNavMenuItem href="/orders"><img src={Clipboard} alt="Balance icon" className="nav-icon"/>Orders</SideNavMenuItem>
            <SideNavMenuItem href="/clients"><img src={Clients} alt="Customers icon" className="nav-icon"/>Clients</SideNavMenuItem>
            <SideNavMenuItem href="/products"><img src={Product} alt="Analytics icon" className="nav-icon"/>Products</SideNavMenuItem>
            <SideNavMenuItem href="/profile"><img src={Profile} alt="Team icon" className="nav-icon"/>Profile</SideNavMenuItem>
        </SideNavItems>
        </StyledSideNav>
    );
};
export default Sidenav;