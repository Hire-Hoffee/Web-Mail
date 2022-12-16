import React from "react";
import StyledHeader from "./styles/StyledHeader";
import FlexContainer from "./styles/FlexContainer";
import mailLogoWhite from "@/assets/images/mailLogoWhite.svg";

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <FlexContainer>
        <img src={mailLogoWhite} alt="logo_white" />
      </FlexContainer>
    </StyledHeader>
  );
}

export default Header;
