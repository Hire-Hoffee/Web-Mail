import styled from "styled-components";

const StyledEmailsContainer = styled.main`
  background-color: ${({ theme }) => theme.container};
  position: relative;
  width: 100%;
  height: calc(100vh - 82px);
  margin-left: 16px;
  border-radius: 12px;
  overflow: hidden;
  overflow-y: auto;
  color: ${({ theme }) => theme.text.primary};
  .moreEmailsLoader {
    color: ${({ theme }) => theme.text.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    svg {
      width: 20px;
      height: 20px;
    }
    .rotate {
      width: 30;
      animation: rotation 1.5s infinite linear;
    }
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  }
`;

export default StyledEmailsContainer;
