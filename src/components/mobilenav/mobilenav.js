import React from 'react'
import { Dashboard32, Result32, Events32, Package32, User32  } from '@carbon/icons-react';

import { Container, Spacer, NavWrapper, NavButton, NavLink } from './style'

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="/dashboard">
          <NavButton
            hasIconOnly
            renderIcon={Dashboard32}
            iconDescription="Dashboard"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/orders">
          <NavButton
            hasIconOnly
            renderIcon={Result32}
            iconDescription="Order"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/clients">
          <NavButton
            hasIconOnly
            renderIcon={Events32}
            iconDescription="Clients"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/products">
          <NavButton
            hasIconOnly
            renderIcon={Package32}
            iconDescription="Products"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/profile">
          <NavButton
            hasIconOnly
            renderIcon={User32}
            iconDescription="profile"
            tooltipPosition="bottom"
          />
        </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav;