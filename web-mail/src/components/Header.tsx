import React from "react";
import StyledHeader from "./styles/StyledHeader";
import FlexContainer from "./styles/FlexContainer";
import mailLogoWhite from "@/assets/images/mailLogoWhite.svg";

import LogoSVG from "./styles/svgs/LogoSVG";

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <FlexContainer>
        <LogoSVG />
      </FlexContainer>
    </StyledHeader>
  );
}

export default Header;
