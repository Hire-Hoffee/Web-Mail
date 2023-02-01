import styled from "styled-components";

const StyledLoading = styled.span`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  svg {
    width: 100px;
    height: 100px;
  }

  .rotate {
    width: 100px;
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
`;

export default StyledLoading;
