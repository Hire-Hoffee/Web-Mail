import styled from "styled-components";

const StyledLanguageSwitcher = styled.div`
  padding: 26px 46px 26px 32px;
  h4 {
    margin-bottom: 20px;
    font-size: 15px;
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    label {
      cursor: pointer;
      margin-bottom: 16px;
      font-size: 15px;
      span {
        img {
          margin-left: 12px;
          margin-right: 12px;
        }
      }
    }
  }
  button {
    background-color: #005ff9;
    color: #ffffff;
    font-size: 15px;
    line-height: 20px;
    padding: 8px 20px;
    border-radius: 8px;
    transition: 0.2s;
    cursor: pointer;
    border: none;
  }
  button:hover {
    filter: brightness(0.8);
    transition: 0.2s;
  }
`;

export default StyledLanguageSwitcher;
