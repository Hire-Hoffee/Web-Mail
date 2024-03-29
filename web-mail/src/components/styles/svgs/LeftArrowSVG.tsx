import React from "react";
import StyledSVG from "../styledUtils/StyledSVG";

function LeftArrowSVG() {
  return (
    <StyledSVG>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.2071 15.2071C11.8166 15.5976 11.1834 15.5976 10.7929 15.2071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289L10.7929 4.79289C11.1834 4.40237 11.8166 4.40237 12.2071 4.79289C12.5976 5.18342 12.5976 5.81658 12.2071 6.20711L8.41421 10L12.2071 13.7929C12.5976 14.1834 12.5976 14.8166 12.2071 15.2071Z"
          fill="#2C2D2E"
        />
      </svg>
    </StyledSVG>
  );
}

export default LeftArrowSVG;
