import styled from "styled-components";
import { ThemeType } from "./themes";

const StyledSVG = styled.div<{ theme: ThemeType }>`
  svg {
    path {
      fill: ${({ theme }) => theme.colors.text.secondary};
    }
  }
`;

export default StyledSVG;
