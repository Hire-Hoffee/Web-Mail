import React from "react";
import StyledSVG from "../../styledUtils/StyledSVG";

function DraftsSVG(): JSX.Element {
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
          d="M21 15C21 15.5523 20.5523 16 20 16H16C15.4477 16 15 15.5523 15 15C15 14.4477 15.4477 14 16 14H20C20.5523 14 21 14.4477 21 15Z"
          fill="#333333"
        />
        <path
          d="M20 19C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H16C15.4477 17 15 17.4477 15 18C15 18.5523 15.4477 19 16 19H20Z"
          fill="#333333"
        />
        <path
          d="M18 22C18.5523 22 19 21.5523 19 21C19 20.4477 18.5523 20 18 20H16C15.4477 20 15 20.4477 15 21C15 21.5523 15.4477 22 16 22H18Z"
          fill="#333333"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 23C11 24.6569 12.3431 26 14 26H22C23.6569 26 25 24.6569 25 23V13C25 11.3431 23.6569 10 22 10H14C12.3431 10 11 11.3431 11 13V23ZM14 24C13.4477 24 13 23.5523 13 23V13C13 12.4477 13.4477 12 14 12H22C22.5523 12 23 12.4477 23 13V23C23 23.5523 22.5523 24 22 24H14Z"
          fill="#333333"
        />
      </svg>
    </StyledSVG>
  );
}

export default DraftsSVG;
