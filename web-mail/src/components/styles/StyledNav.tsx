import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  li:hover {
    background-color: ${({ theme }) => theme.colors.selected};
    border-radius: 8px;
    transition: 0.4s;
  }
  li {
    width: 200px;
    height: 36px;
    display: flex;
    align-items: center;
    transition: 0.4s;
  }
  @media (max-width: 768px) {
    .hidden {
      display: none;
    }
    li {
      width: 100%;
    }
  }
`;

export default StyledNav;
