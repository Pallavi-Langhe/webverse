import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavMenu = styled.ul`
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  margin: 0.8rem 0.3rem 0.3rem 2.25rem;
  text-decoration: none;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 10px;
  color: ${(props) => (props.exact === "true" ? "red" : "white")};
  &:hover {
    background-color: #4A3780;
    color: #ffff !important;
  }
  &.active {
    background-color: var(--color-secondary);
    color: #ffff !important;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  font-size: 1.4rem;
  padding: 1rem 1rem 1rem 0.4rem;
`;

export const IconWrapper = styled.span`
  padding-top: 1rem !important;
  padding: 1rem;
`;
