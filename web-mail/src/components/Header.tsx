import React from "react";
import StyledHeader from "./styles/StyledHeader";
import FlexContainer from "./styles/FlexContainer";
import { Link, useParams, useNavigate } from "react-router-dom";

import LogoSVG from "./styles/svgs/LogoSVG";
import ArrowLeftSVG from "./styles/svgs/arrowLeftSVG";

function Header(): JSX.Element {
  const { title } = useParams();
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <FlexContainer>
        <Link to={"/inbox"}>
          {!title ? (
            <LogoSVG />
          ) : (
            <div onClick={() => navigate(-1)}>
              <ArrowLeftSVG />
              <p>Вернуться</p>
            </div>
          )}
        </Link>
      </FlexContainer>
    </StyledHeader>
  );
}

export default Header;
