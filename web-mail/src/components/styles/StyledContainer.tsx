import styled from "styled-components";
import { ThemeType } from "./themes";

const StyledContainer = styled.nav<{ theme: ThemeType }>`
  display: flex;
  padding: 13px 12px 13px 16px;
`;

export default StyledContainer;
