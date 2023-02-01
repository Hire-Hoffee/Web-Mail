import React from "react";
import SpinnerSVG from "../styles/svgs/SpinnerSVG";
import StyledLoading from "../styles/styledUtils/StyledLoading";
import { useAppSelector } from "@/store/hooks";

function LoadingComponent(props: { svgFill?: string }): JSX.Element {
  const theme = useAppSelector((state) => state.utils.theme);

  return (
    <StyledLoading>
      <SpinnerSVG svgFill={props.svgFill} />
    </StyledLoading>
  );
}

export default LoadingComponent;
