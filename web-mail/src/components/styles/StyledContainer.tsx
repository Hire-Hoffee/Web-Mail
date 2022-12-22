import styled from "styled-components";
import ThemeType from "@/types/themeType";

const StyledContainer = styled.div<{ theme: ThemeType }>`
  display: flex;
  padding: 13px 12px 13px 16px;
`;

export default StyledContainer;
