import styled from "styled-components";
import { ThemeType } from "./themes";

const StyledHeader = styled.header<{ theme: ThemeType }>`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.header};
  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 8px;
    p {
      margin-left: 8px;
    }
  }
`;

export default StyledHeader;
