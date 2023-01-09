import styled from "styled-components";

const StyledNavbar = styled.nav`
  width: 232px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  a:last-child {
    color: ${({ theme }) => theme.text.secondary};
  }

  button {
    width: 200px;
    height: 36px;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 12px;
    border: 1px solid rgba(0, 16, 61, 0.12);
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s;
  }

  @media (max-width: 768px) {
    width: 36px;
    span:last-child {
      display: none;
    }
    button {
      width: fit-content;
      background-color: transparent;
      border: none;
    }
  }

  @media (min-width: 768px) {
    img:first-child {
      display: none;
    }
  }

  button:hover {
    opacity: 0.6;
    transition: 0.2s;
  }

  hr {
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.hrNav};
    border: none;
  }

  p {
    margin-left: 12px;
    color: red;
  }

  .active li {
    font-weight: bold;
    background-color: ${({ theme }) => theme.hoveredNav};
    border-radius: 8px;
  }
`;

export default StyledNavbar;
