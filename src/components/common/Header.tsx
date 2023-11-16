import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: linear-gradient(to right, #f8049c, #fdd54f);
  border-bottom: #fdd54f;
`;

const Menu = styled.nav<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "block" : "none")};
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  font-family: "Open Sans";
  box-sizing: border-box;
  background: white;
  border-bottom: #fdd54f;

  // media query
  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    position: relative;
    width: initial;
  }
`;

// using css selector
const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;

  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

// MenuAlt extends Menu
const MenuAlt = styled(Menu)`
  border-top: 5px solid black;
`;

// styling regular React component
const StyledLink = styled(NavLink)<{ $isActive: boolean }>`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  color: black;
`;

const Header = () => {
  const [openMenu, setMenuOpen] = useState(false);
  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen(!openMenu)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu $open={openMenu}>
        <StyledLink to="/" $isActive>
          Home
        </StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
