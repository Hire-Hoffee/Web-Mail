import styled from "styled-components";
import { ThemeType } from "./themes";

const StyledEmailsContainer = styled.main<{ theme: ThemeType }>`
  background-color: ${({ theme }) => theme.colors.header};
  position: relative;
  width: 100%;
  margin-left: 16px;
  border-radius: 12px;
  overflow: hidden;
`;

export default StyledEmailsContainer;
