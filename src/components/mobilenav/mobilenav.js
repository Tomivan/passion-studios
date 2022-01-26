import React from 'react'
import Dashboard from '../../assets/images/dashboard.png';
import Clipboard from '../../assets/images/clipboard.png';
import Clients from '../../assets/images/clients.png';
import Invoice from '../../assets/images/invoice.png';
import Product from '../../assets/images/product.png';
import Profile from '../../assets/images/profile.png';
import Setting from '../../assets/images/setting.png';

import { Container, Spacer, NavWrapper, NavButton, NavLink } from './style'

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="/dashboard">
          <NavButton
            hasIconOnly
            renderIcon={Dashboard}
            iconDescription="Dashboard"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/orders">
          <NavButton
            hasIconOnly
            renderIcon={Clipboard}
            iconDescription="Order"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/clients">
          <NavButton
            hasIconOnly
            renderIcon={Clients}
            iconDescription="Clients"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/products">
          <NavButton
            hasIconOnly
            renderIcon={Product}
            iconDescription="Products"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/invoice">
          <NavButton
            hasIconOnly
            renderIcon={Invoice}
            iconDescription="Invoice"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/profile">
          <NavButton
            hasIconOnly
            renderIcon={Profile}
            iconDescription="profile"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/setting">
          <NavButton
            hasIconOnly
            renderIcon={Setting}
            iconDescription="Setting"
            tooltipPosition="bottom"
          />
        </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav;