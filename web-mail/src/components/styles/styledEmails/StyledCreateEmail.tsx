import styled from "styled-components";
import FlexContainer from "../styledContainers/FlexContainer";

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
    width: 60vmax;
    height: 90vmin;
    background-color: ${({ theme }) => theme.popup};
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.35fr 1fr 0.15fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    overflow: hidden;
    position: relative;

    & > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
      & > span {
        svg {
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
        }
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
      div:first-child {
        button {
          display: flex;
          position: relative;
          justify-content: center;
          align-items: center;
          padding: 10px 20px 10px 20px;
          border: none;
          font-size: 15px;
          border-radius: 8px;
          color: ${({ theme }) => theme.text.global};
          background-color: ${({ theme }) => theme.popup};
          transition: 0.2s;
          span {
            margin-left: 20px;
          }
          svg {
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          input {
            position: absolute;
            opacity: 0;
          }
          input::after {
            content: "";
            position: absolute;
            inset: 0;
            cursor: pointer;
          }
        }
        button:hover {
          background-color: ${({ theme }) => theme.hoveredNav};
          transition: 0.2s;
          cursor: pointer;
        }
        div {
          div {
            display: flex;
            flex-wrap: wrap;
            margin: 5px 0px 5px 0px;
          }
          span {
            font-size: 13px;
            color: ${({ theme }) => theme.text.secondary};
          }
          span:last-child {
            margin-left: 10px;
            text-decoration: underline;
            cursor: pointer;
            transition: 0.2s;
          }
          span:last-child:hover {
            opacity: 0.7;
            transition: 0.2s;
          }
          img {
            width: 75px;
            object-fit: cover;
            border-radius: 10px;
            margin: 5px;
          }
        }
      }
    }
    & > div:nth-child(2) {
      background-color: ${({ theme }) => theme.popup};
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 0.1fr 2fr;
      font-size: 15px;
      font-family: Arial, Helvetica, sans-serif;
      color: #000000;
      & > div:first-child {
        background-color: ${({ theme }) => theme.popup};
        display: flex;
        align-items: center;
        justify-content: start;
        padding-bottom: 10px;
        padding-left: 5px;
        svg {
          opacity: 0.7;
          transition: 0.2s;
          width: 14px;
          margin: 0px 5px 0px 5px;
          padding: 5px 5px 5px 5px;
          border-radius: 5px;
          path {
            transition: 0.2s;
          }
        }
        svg:hover {
          background-color: ${({ theme }) => theme.hoveredNav};
          transition: 0.2s;
          cursor: pointer;
          path {
            opacity: 0.7;
            transition: 0.2s;
          }
        }
      }
      & > div:last-child {
        max-height: 49.1vmin;
        padding: 15px;
        background-color: #ffffff;
        overflow: hidden;
        overflow-y: auto;
        box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.12) inset;
      }
    }
    & > div:last-child {
      padding-left: 10px;
      display: flex;
      justify-content: start;
      align-items: center;
      button:first-child {
        background-color: #005ff9;
        color: #ffffff;
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
