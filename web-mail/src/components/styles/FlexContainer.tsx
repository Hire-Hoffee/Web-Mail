import styled from "styled-components";
import ThemeType from "@/types/themeType";

const FlexContainer = styled.div<{ theme: ThemeType }>`
  display: flex;
  align-items: center;
  /* width: 100%; */
  height: 100%;
`;

export default FlexContainer;
