import React from "react";
import styled from "styled-components";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { changeThemeState } from "@/store/utilsSlice";

const StyledSVG = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-right: 15px;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.hoveredNav};
    border-radius: 8px;
    transition: 0.2s;
  }

  cursor: pointer;

  svg {
    path {
      stroke: ${({ theme }) => theme.text.primary};
    }
    rect {
      fill: ${({ theme }) => theme.text.primary};
    }
  }

  @media (max-width: 768px) {
    .hidden {
      display: none;
    }
    padding-right: 0px;
  }
`;

function ThemeSwitcher(): JSX.Element {
  const theme = useAppSelector((state) => state.utils.theme);
  const dispatch = useAppDispatch();

  function changeTheme(): void {
    if (theme === "white") {
      dispatch(changeThemeState("black"));
      localStorage.setItem("theme", "black");
      return;
    }
    dispatch(changeThemeState("white"));
    localStorage.setItem("theme", "white");
    return;
  }

  return (
    <StyledSVG onClick={changeTheme}>
      <svg
        width="38"
        height="37"
        viewBox="0 0 38 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.2839 22.0427L23.2838 22.0427C23.2113 22.035 23.1417 22.0275 23.0749 22.0203C22.3917 21.947 22.0097 21.9061 21.954 21.9022C21.4492 21.8674 20.917 21.8883 20.4745 22.1127C20.2289 22.2372 20.0126 22.4236 19.8602 22.6774C19.7128 22.9232 19.6589 23.1759 19.6445 23.3879C19.6183 23.7716 19.7166 24.1648 19.7842 24.4247C19.8073 24.5135 19.8297 24.5963 19.8511 24.6759C19.9064 24.8807 19.9558 25.0635 19.9956 25.2668C20.1342 25.9742 19.599 26.4999 19 26.4999C16.9287 26.4999 15.055 25.6615 13.6967 24.3032C12.3384 22.9448 11.5 21.0712 11.5 18.9999C11.5 16.9285 12.3384 15.0549 13.6967 13.6966C15.055 12.3382 16.9287 11.4999 19 11.4999C21.0713 11.4999 22.945 12.3382 24.3033 13.6966C25.6616 15.0549 26.5 16.9285 26.5 18.9999C26.5 20.4138 26.0434 21.1533 25.5314 21.5477C24.9854 21.9682 24.1903 22.1399 23.2839 22.0428C23.2839 22.0428 23.2839 22.0427 23.2839 22.0427Z"
          stroke="#2C2D2E"
          strokeWidth="2"
        />
        <rect x="19.8" y="13.7998" width="2.5" height="2.5" rx="1.25" fill="#2C2D2E" />
        <rect x="22.2001" y="17.1998" width="2.5" height="2.5" rx="1.25" fill="#2C2D2E" />
        <rect x="13.3" y="17.1998" width="2.5" height="2.5" rx="1.25" fill="#2C2D2E" />
        <rect x="15.6" y="13.7998" width="2.5" height="2.5" rx="1.25" fill="#2C2D2E" />
      </svg>
      <div className="hidden">Тема: {theme === "white" ? "светлая" : "темная"}</div>
    </StyledSVG>
  );
}

export default ThemeSwitcher;
