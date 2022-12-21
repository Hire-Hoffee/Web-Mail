import styled from "styled-components";
import ThemeType from "@/types/themeType";

const StyledSVG = styled.div<{ theme: ThemeType }>`
  svg {
    path {
      fill: ${({ theme }) => theme.colors.text.secondary};
    }
  }
`;

export default StyledSVG;
