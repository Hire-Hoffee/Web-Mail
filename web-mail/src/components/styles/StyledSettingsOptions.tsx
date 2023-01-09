import styled from "styled-components";

const StyledSettingsOptions = styled.section`
  width: 100%;
  height: 0px;
  visibility: hidden;
  background-color: ${({ theme }) => theme.container};
  box-shadow: 0px -3px 48px rgba(0, 16, 61, 0.28);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 1fr;

  & > div:first-child {
    border-right: 1px solid;
    border-color: ${({ theme }) => theme.hr};
    padding: 20px 17px 20px 20px;
    display: flex;
    flex-direction: column;

    button {
      padding: 10px 16px 10px 16px;
      border-radius: 4px;
      border: none;
      background-color: ${({ theme }) => theme.container};
      color: ${({ theme }) => theme.text.primary};
      transition: 0.2s;
      text-align: start;
      cursor: pointer;
      font-size: 15px;
      display: flex;
      align-items: center;
      img {
        margin-left: 8px;
      }
    }
    button:hover {
      transition: 0.2s;
      background-color: ${({ theme }) => theme.hoveredItem};
    }
  }

  .activeBtn {
    font-weight: bold;
    background-color: ${({ theme }) => theme.hoveredNav} !important;
    border-radius: 8px;
  }

  .showSettingsSwitcher {
    animation-name: showSettingsSwitcher;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }
  .hideSettingsSwitcher {
    animation-name: hideSettingsSwitcher;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }

  @keyframes showSettingsSwitcher {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes hideSettingsSwitcher {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export default StyledSettingsOptions;
