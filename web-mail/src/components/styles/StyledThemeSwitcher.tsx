import styled from "styled-components";
import imageBackground from "@/assets/images/imageBackground.png";
import checkMark from "@/assets/images/checkMark.svg";

const StyledThemeSwitcher = styled.div`
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
      background-position: center;
      position: relative;
    }

    .chosenTheme:after {
      content: "";
      opacity: 1;
      background: rgba(0, 95, 249, 0.48);
      background-image: url(${checkMark});
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    div:after {
      content: "";
      opacity: 0;
      background: rgba(0, 95, 249, 0.48);
      background-image: url(${checkMark});
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      transition: 0.2s;
    }
    div:hover:after {
      opacity: 1;
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
      position: relative;
    }

    div:after {
      content: "";
      opacity: 0;
      background: rgba(0, 95, 249, 0.48);
      background-image: url(${checkMark});
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      transition: 0.2s;
    }
    div:hover:after {
      opacity: 1;
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
`;

export default StyledThemeSwitcher;
