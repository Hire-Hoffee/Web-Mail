import styled from "styled-components";
import ThemeType from "@/types/themeType";

const FlexContainer = styled.div<{ theme: ThemeType }>`
  display: flex;
  align-items: center;
  height: 100%;
`;

export default FlexContainer;
