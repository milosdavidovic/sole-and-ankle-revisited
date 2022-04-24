import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS, RESPONSIVE_BRAKE_POINTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const handleMenuClick = () => {
    setShowMobileMenu(true);
  };

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale!!!</NavLink>
          <NavLink href="/new">New&nbsp;Releases!!!</NavLink>
          <NavLink href="/men">Men!!!</NavLink>
          <NavLink href="/women">Women!!!</NavLink>
          <NavLink href="/kids">Kids!!!</NavLink>
          <NavLink href="/collections">Collections!!!</NavLink>
        </Nav>
        <Side>
          <MobileIconsWrapper>
            <Icon id="shopping-bag" />
            <Icon id="search" />
            <Icon id="menu" onClick={handleMenuClick} />
          </MobileIconsWrapper>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MobileIconsWrapper = styled.div`
  display: none;

  @media (max-width: ${RESPONSIVE_BRAKE_POINTS.tablet}) {
    display: flex;
    justify-content: flex-end;
    gap: 2.5rem;
  }

  @media (max-width: ${RESPONSIVE_BRAKE_POINTS.mobile}) {
    gap: 1.5rem;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 16px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 7vw - 3.25rem, 5rem);
  margin: 0px 48px;

  @media (max-width: ${RESPONSIVE_BRAKE_POINTS.tablet}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
