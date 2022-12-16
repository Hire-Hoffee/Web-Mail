import React from "react";
import StyledNav from "./styles/StyledNav";

type NavProps = {
  to: string;
  svgComponent: JSX.Element;
  name: string;
};

function NavRoute({ to, svgComponent, name }: NavProps): JSX.Element {
  return (
    <StyledNav to={to}>
      <li>
        <div>{svgComponent}</div>
        <div>{name}</div>
      </li>
    </StyledNav>
  );
}

export default NavRoute;
