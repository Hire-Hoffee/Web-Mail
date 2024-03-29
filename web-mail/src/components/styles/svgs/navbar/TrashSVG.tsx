import React from "react";
import StyledSVG from "../../styledUtils/StyledSVG";

function TrashSVG(): JSX.Element {
  return (
    <StyledSVG>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 10C19.1038 10 20 10.8962 20 12H23C23.5523 12 24 12.4477 24 13C24 13.5523 23.5523 14 23 14H13C12.4477 14 12 13.5523 12 13C12 12.4477 12.4477 12 13 12H16C16 10.8962 16.8962 10 18 10Z"
          fill="#333333"
        />
        <path
          d="M15.0728 15.9768C15.0082 15.4283 14.5112 15.036 13.9627 15.1006C13.4142 15.1652 13.022 15.6623 13.0866 16.2107L14.0317 24.234C14.1504 25.2411 15.004 26 16.018 26H19.985C20.9991 26 21.8527 25.2411 21.9713 24.234L22.9165 16.2107C22.9811 15.6623 22.5888 15.1652 22.0403 15.1006C21.4918 15.036 20.9948 15.4283 20.9302 15.9768L19.985 24H16.018L15.0728 15.9768Z"
          fill="#333333"
        />
      </svg>
    </StyledSVG>
  );
}

export default TrashSVG;
