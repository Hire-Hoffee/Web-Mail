import React from "react";
import SpinnerSVG from "./styles/svgs/SpinnerSVG";
import StyledLoading from "./styles/StyledLoading";

function LoadingComponent() {
  return (
    <StyledLoading>
      <SpinnerSVG />
    </StyledLoading>
  );
}

export default LoadingComponent;
