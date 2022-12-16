import styled from "styled-components";
import { ThemeType } from "./themes";

const StyledHeader = styled.header<{ theme: ThemeType }>`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.header};
  img {
    width: 96px;
    height: 32px;
    margin-left: 16px;
  }
`;

export default StyledHeader;
