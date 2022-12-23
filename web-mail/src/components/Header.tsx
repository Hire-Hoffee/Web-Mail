import React from "react";
import StyledHeader from "./styles/StyledHeader";
import FlexContainer from "./styles/FlexContainer";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

import LogoSVG from "./styles/svgs/LogoSVG";
import LeftArrowSVG from "./styles/svgs/LeftArrowSVG";

function Header(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <FlexContainer>
        <Link to={"/inbox"}>
          {!searchParams.get("title") ? (
            <LogoSVG />
          ) : (
            <div onClick={() => navigate(-1)}>
              <LeftArrowSVG />
              <p>Вернуться</p>
            </div>
          )}
        </Link>
      </FlexContainer>
    </StyledHeader>
  );
}

export default Header;
