import styled from "styled-components";
import { ThemeType } from "./themes";
import { NavLink } from "react-router-dom";

const StyledNav = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  li {
    width: 200px;
    height: 36px;
    display: flex;
    align-items: center;
  }
`;

export default StyledNav;
