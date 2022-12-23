import React from "react";
import styled from "styled-components";
import reset from "styled-reset";

const StyledError = styled.div`
  ${reset}

  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 100px;
  border-radius: 20px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 2px 2px #ddd;

  h1 {
    font-size: 32px;
    margin-bottom: 30px;
    color: #d18c11;
  }
  a {
    font-size: 24px;
    color: #005bd1;
    margin: auto;
  }
`;

function ErrorComponent() {
  return (
    <StyledError>
      <h1>Произошла непредвиденная ошибка :(</h1>
      <a href="/">Вернуться на главную</a>
    </StyledError>
  );
}

export default ErrorComponent;
