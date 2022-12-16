import React from "react";
import StyledSVG from "../StyledSVG";

function ImportantSVG(): JSX.Element {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 13C11 11.8954 11.8954 11 13 11H16.382C17.1395 11 17.832 11.428 18.1708 12.1056L18.618 13H22C23.6569 13 25 14.3431 25 16V22C25 23.6569 23.6569 25 22 25H14C12.3431 25 11 23.6569 11 22V13ZM16.382 13H13V22C13 22.5523 13.4477 23 14 23H22C22.5523 23 23 22.5523 23 22V16C23 15.4477 22.5523 15 22 15H17.382L16.382 13Z"
          fill="#2C2D2E"
        />
      </svg>
    </StyledSVG>
  );
}

export default ImportantSVG;
