import React from "react";
import SpinnerSVG from "./styles/svgs/SpinnerSVG";
import StyledLoading from "./styles/StyledLoading";
import { useAppSelector } from "@/store/hooks";

function LoadingComponent(): JSX.Element {
  const theme = useAppSelector((state) => state.utils.theme);

  return (
    <StyledLoading>
      <SpinnerSVG svgFill={theme === "anime" ? "#ffffff" : undefined} />
    </StyledLoading>
  );
}

export default LoadingComponent;
