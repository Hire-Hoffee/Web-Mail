import styled from "styled-components";

const StyledFilter = styled.div`
  z-index: 9999;
  width: 240px;
  background-color: ${({ theme }) => theme.popup};
  box-shadow: 0px 4px 32px rgba(0, 16, 61, 0.16);
  border-radius: 12px;
  position: absolute;
  right: 12px;
  top: 50px;
  transition: 0.2s;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 15px;
  ul {
    li:first-child {
      div {
        div {
          left: -4px;
        }
      }
    }
    div:nth-child(6) {
      hr {
        height: 1px;
        width: 100%;
        background: ${({ theme }) => theme.hrNav};
        border: none;
      }
    }
  }
`;

export default StyledFilter;
