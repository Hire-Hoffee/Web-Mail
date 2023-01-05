import styled from "styled-components";
import ThemeType from "@/types/themeType";

const NotFoundStyles = styled.div<{ theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  h1 {
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
  }
`;

export default NotFoundStyles;
