import React from 'react'
import { Dashboard32, Result32, Events32, Package32, Receipt32, User32, Settings32  } from '@carbon/icons-react';

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
        <NavLink to="/invoice">
          <NavButton
            hasIconOnly
            renderIcon={Receipt32}
            iconDescription="Invoice"
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
        <NavLink to="/setting">
          <NavButton
            hasIconOnly
            renderIcon={Settings32}
            iconDescription="Setting"
            tooltipPosition="bottom"
          />
        </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav;