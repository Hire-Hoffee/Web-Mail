import React from "react";
import styled from "styled-components";
import GearSVG from "./styles/svgs/GearSVG";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { changeSettingsOpen } from "@/store/utilsSlice";

const StyledSettingsButton = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 10px;
  transition: 0.2s;
  cursor: pointer;
  user-select: none;

  P {
    margin-left: 10px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.hoveredNav};
    border-radius: 8px;
    transition: 0.2s;
  }

  @media (max-width: 768px) {
    .hidden {
      display: none;
    }
    padding-right: 0px;
  }
  .rotateGearBackward {
    transform: rotate(0deg);
    transition: 0.2s;
  }
  .rotateGearForward {
    transform: rotate(45deg);
    transition: 0.2s;
  }
`;

function SettingsButton(): JSX.Element {
  const settingsOpen = useAppSelector((state) => state.utils.settingsOpen);
  const dispatch = useAppDispatch();

  return (
    <StyledSettingsButton onClick={() => dispatch(changeSettingsOpen(!settingsOpen))}>
      <div className={settingsOpen ? "rotateGearForward" : "rotateGearBackward"}>
        <GearSVG />
      </div>
      <p>Настройки</p>
    </StyledSettingsButton>
  );
}

export default SettingsButton;
