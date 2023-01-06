import styled from "styled-components";
import ThemeType from "@/types/themeType";

const StyledFilter = styled.div<{ theme: ThemeType }>`
  z-index: 9999;
  width: 240px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.header};
  box-shadow: 0px 4px 32px rgba(0, 16, 61, 0.16);
  border-radius: 12px;
  position: absolute;
  right: 12px;
  top: 50px;
  transition: 0.2s;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export default StyledFilter;
