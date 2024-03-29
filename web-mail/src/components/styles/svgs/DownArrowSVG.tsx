import React from "react";
import StyledSVG from "../styledUtils/StyledSVG";

function DownArrowSVG() {
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
          d="M13.7071 7.79289C14.0976 8.18342 14.0976 8.81658 13.7071 9.20711L10.7071 12.2071C10.3166 12.5976 9.68341 12.5976 9.29289 12.2071L6.29289 9.20711C5.90236 8.81658 5.90236 8.18342 6.29289 7.79289C6.68341 7.40237 7.31657 7.40237 7.7071 7.79289L9.99999 10.0858L12.2929 7.79289C12.6834 7.40237 13.3166 7.40237 13.7071 7.79289Z"
          fill="#2C2D2E"
        />
      </svg>
    </StyledSVG>
  );
}

export default DownArrowSVG;
