import React from "react";
import StyledHeader from "./styles/StyledHeader";
import FlexContainer from "./styles/FlexContainer";
import mailLogoWhite from "@/assets/images/mailLogoWhite.svg";
import { Link } from "react-router-dom";

import LogoSVG from "./styles/svgs/LogoSVG";

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <FlexContainer>
        <Link to={"/inbox"}>
          <LogoSVG />
        </Link>
      </FlexContainer>
    </StyledHeader>
  );
}

export default Header;
