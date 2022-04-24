/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, COLORS, RESPONSIVE_BRAKE_POINTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <StyledDialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <StyledDialogContent aria-label="menu">
        <Wrapper>
          <Button onClick={onDismiss}>
            <VisuallyHidden>Close</VisuallyHidden>
            <Icon id="close"></Icon>
          </Button>
          <Nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Nav>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Wrapper>
      </StyledDialogContent>
    </StyledDialogOverlay>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: clamp(240px, 50vw, 340px);
`;

const Nav = styled.nav`
  & a {
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${18 / 16}rem;
    color: inherit;
    cursor: pointer;
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Footer = styled.footer`
  & a {
    display: block;
    color: var(--color-gray-700);
    text-decoration: none;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Button = styled(UnstyledButton)`
  align-self: flex-end;
`;

const StyledDialogOverlay = styled(DialogOverlay)`
  display: none;

  @media (max-width: ${RESPONSIVE_BRAKE_POINTS.tablet}) {
    background-color: var(--color-gray-700-transparent);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const StyledDialogContent = styled(DialogContent)`
  background-color: var(--color-white);
  padding: 2rem;
  height: 100%;
  opacity: 1;
`;

export default MobileMenu;
