import styled from "styled-components";
import FlexContainer from "./FlexContainer";

const StyledCreateEmail = styled(FlexContainer)`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 999;
  justify-content: center;
  transition: 0.1s;

  & > div {
    width: 880px;
    height: 860px;
    background-color: ${({ theme }) => theme.popup};
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.35fr 1fr 0.15fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    overflow: hidden;
    position: relative;

    div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
      svg {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
      }
      label {
        color: ${({ theme }) => theme.text.secondary};
        font-size: 13px;
      }
      input {
        width: 80%;
        height: 30px;
        background-color: ${({ theme }) => theme.popup};
        border: none;
        color: ${({ theme }) => theme.text.primary};
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
      }
      input:focus {
        outline: none;
      }
      hr {
        height: 1px;
        width: 100%;
        background: ${({ theme }) => theme.hrNav};
        border: none;
      }
    }
    div:nth-child(2) {
      textarea {
        width: 100%;
        height: 100%;
        resize: none;
        border: none;
        box-sizing: border-box;
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px;
      }
      textarea:focus {
        outline: none;
      }
    }
    div:last-child {
      padding-left: 10px;
      display: flex;
      justify-content: start;
      align-items: center;
      button:first-child {
        background-color: #005ff9;
      }
      button:last-child {
        background-color: ${({ theme }) => theme.hoveredNav};
      }
      button {
        padding: 10px 20px 10px 20px;
        margin: 0px 10px 0px 10px;
        border: none;
        font-size: 15px;
        border-radius: 8px;
        color: ${({ theme }) => theme.text.primary};
        transition: 0.2s;
      }
      button:hover {
        opacity: 0.8;
        transition: 0.2s;
        cursor: pointer;
      }
    }
  }
`;

export default StyledCreateEmail;
