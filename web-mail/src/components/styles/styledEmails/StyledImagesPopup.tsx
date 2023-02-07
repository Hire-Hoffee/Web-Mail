import styled from "styled-components";

const StyledImagesPopup = styled.span`
  width: 20px;
  height: 20px;
  position: relative;
  svg {
    transition: 0.2s;
  }
  svg:hover {
    opacity: 0.5;
    transition: 0.2s;
  }
  & > span:last-child {
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: start;
    opacity: 0;
    width: 300px;
    padding: 5px 10px 5px 10px;
    height: 40px;
    position: absolute;
    top: -15px;
    left: -320px;
    border-radius: 12px;
    box-shadow: 0px 4px 32px rgba(0, 16, 61, 0.24);
    background-color: ${({ theme }) => theme.body};
    img {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      margin-right: 10px;
    }
  }
  & > span:last-child:hover {
    background-color: ${({ theme }) => theme.container};
    transition: 0.2s;
  }

  .open {
    visibility: visible;
    animation-name: open;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }

  @keyframes open {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default StyledImagesPopup;
