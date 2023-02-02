import React from "react";
import SpinnerSVG from "../styles/svgs/SpinnerSVG";
import StyledLoading from "../styles/styledUtils/StyledLoading";

function LoadingComponent(props: { svgFill?: string }): JSX.Element {
  return (
    <StyledLoading>
      <SpinnerSVG svgFill={props.svgFill} />
    </StyledLoading>
  );
}

export default LoadingComponent;
