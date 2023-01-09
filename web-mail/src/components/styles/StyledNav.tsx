import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.text.global};

  li:hover {
    background-color: ${({ theme }) => theme.hoveredNav};
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
    li {
      width: 100%;
      div:nth-child(even) {
        display: none;
      }
    }
  }
`;

export default StyledNav;
