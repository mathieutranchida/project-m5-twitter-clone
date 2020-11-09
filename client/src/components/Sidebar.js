import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/logo.svg";
import COLORS from "../constants";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";

const IconStyle = {
  height: "25px",
  width: "25px",
  paddingRight: "15px",
};

const Sidebar = () => {
  return (
    <Wrapper>
      <LogoWrapper href="/">
        <Logo style={{ height: "65px", width: "50px" }} />
      </LogoWrapper>
      <Nav>
        <StyledNavLink activeClassName="active" exact to="/">
          <FiHome style={IconStyle} />
          <Title>Home</Title>
        </StyledNavLink>
        <StyledNavLink activeClassName="active" to="/:profileId">
          <FiUser style={IconStyle} />
          <Title>Profile</Title>
        </StyledNavLink>
        <StyledNavLink activeClassName="active" to="/notifications">
          <FiBell style={IconStyle} />
          <Title>Notifications</Title>
        </StyledNavLink>
        <StyledNavLink activeClassName="active" to="/bookmarks">
          <FiBookmark style={IconStyle} />
          <Title>Bookmarks</Title>
        </StyledNavLink>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 25px;
  border-right: 1px solid grey;
`;

const LogoWrapper = styled.a``;

const Nav = styled.nav``;

const StyledNavLink = styled(NavLink)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  &.active {
    color: ${COLORS.primary};
  }
`;

const Title = styled.h1``;

export default Sidebar;
