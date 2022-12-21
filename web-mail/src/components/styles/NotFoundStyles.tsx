import styled from "styled-components";
import ThemeType from "@/types/themeType";

const NotFoundStyles = styled.div<{ theme: ThemeType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
`;

export default NotFoundStyles;
