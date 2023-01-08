import styled from "styled-components";
import imageBackground from "@/assets/images/imageBackground.png";

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
  grid-template-columns: 0.5fr 2fr;
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
    }
    button:hover {
      transition: 0.2s;
      background-color: ${({ theme }) => theme.hoveredItem};
    }
  }

  & > div:last-child {
    padding: 26px 46px 26px 32px;
    h4 {
      margin-bottom: 20px;
      font-size: 15px;
    }

    & > div:nth-child(2) {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(2, 1fr);
      max-width: 700px;

      div {
        width: 67.5px;
        height: 40px;
        margin: 6px 10px;
        cursor: pointer;
        transition: 0.2s;
      }
      div:hover {
        filter: brightness(0.7);
        transition: 0.2s;
      }

      & > div:nth-child(1) {
        background-color: #4a352f;
      }
      & > div:nth-child(2) {
        background-color: #424242;
      }
      & > div:nth-child(3) {
        background-color: #5a355a;
      }
      & > div:nth-child(4) {
        background-color: #35385a;
      }
      & > div:nth-child(5) {
        background-color: #646ecb;
      }
      & > div:nth-child(6) {
        background-color: #e73672;
      }
      & > div:nth-child(7) {
        background-color: #f44336;
      }
      & > div:nth-child(8) {
        background-color: #388e3c;
      }
      & > div:nth-child(9) {
        background-color: #81d8d0;
      }
      & > div:nth-child(10) {
        background-color: #e2dcd2;
      }
      & > div:nth-child(11) {
        background-color: #ffebcd;
      }
      & > div:nth-child(12) {
        background-color: #e7eed2;
      }
      & > div:nth-child(13) {
        background-color: #d0f0f7;
      }
      & > div:nth-child(14) {
        background-color: #c9d0fb;
      }
      & > div:nth-child(15) {
        background-color: #ddf3ff;
      }
      & > div:nth-child(16) {
        background-color: #f0f0f0;
      }
    }
    & > div:last-child {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      max-width: 420px;
      div {
        width: 120px;
        height: 88px;
        margin: 10px 10px;
        cursor: pointer;
        transition: 0.2s;
      }
      div:hover {
        filter: brightness(0.7);
        transition: 0.2s;
      }
      & > div:nth-child(1) {
        background-color: #ffffff;
        svg {
          path:last-child {
            fill: #005ff9 !important;
          }
        }
      }
      & > div:nth-child(2) {
        background-color: #000000;
        svg {
          path:last-child {
            fill: #ffffff !important;
          }
        }
      }
      & > div:nth-child(3) {
        background-image: url(${imageBackground});
      }
      & > div:nth-child(1),
      & > div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          margin: 0px;
        }
      }
    }
  }
`;

export default StyledSettingsOptions;
