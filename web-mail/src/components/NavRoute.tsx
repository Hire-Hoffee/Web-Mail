import React from "react";
import StyledNav from "./styles/StyledNav";
import { NavProps } from "@/types/otherTypes";

function NavRoute({ to, svgComponent, name }: NavProps): JSX.Element {
  return (
    <StyledNav to={to}>
      <li>
        <div>{svgComponent}</div>
        <div className="hidden">{name}</div>
      </li>
    </StyledNav>
  );
}

export default NavRoute;
