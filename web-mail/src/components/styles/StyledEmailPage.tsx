import styled from "styled-components";
import StyledEmailsContainer from "./StyledEmailsContainer";

const StyledEmailPage = styled(StyledEmailsContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  padding-left: 32px;
  padding-right: 32px;
  position: relative;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    h1 {
      font-size: 24px;
      font-weight: bold;
    }
    div {
      font-size: 13px;
      display: flex;
      align-items: center;
    }
  }

  & > div:nth-child(2) {
    margin-bottom: 8px;
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;

    div:nth-child(1) {
      display: flex;
      align-items: center;
      position: relative;
      span {
        margin-right: 10px;
      }
    }
    img {
      margin-right: 8px;
    }
  }

  & > div:nth-child(2) div:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div:nth-child(1) {
      span:first-child {
        font-size: 15px;
      }
      span:nth-child(2) {
        font-size: 13px;
      }
    }

    div:last-child {
      font-size: 13px;
      color: ${({ theme }) => theme.text.secondary};
      margin-top: 5px;
    }
  }

  & > div:nth-child(2) div:nth-child(2) {
    img {
      width: 32px;
      height: 32px;
      border-radius: 100%;
    }
  }

  & > div:last-child {
    padding-top: 16px;
    padding-bottom: 16px;

    p {
      line-height: 1.5rem;
      font-size: 15px;
    }
  }

  & > div:nth-child(3) {
    img {
      width: 256px;
      height: 190px;
      border-radius: 12px;
    }

    div {
      font-size: 13px;
      margin-top: 8px;
      margin-bottom: 8px;
      span {
        color: ${({ theme }) => theme.text.secondary};
      }
      a {
        color: #005bd1;
      }
      a:hover {
        opacity: 0.8;
      }
    }
  }
`;

export default StyledEmailPage;
