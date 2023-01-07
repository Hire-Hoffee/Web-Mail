import { DefaultTheme } from "styled-components";

const whiteTheme: DefaultTheme = {
  body: "#f6f7f8",
  header: "#ffffff",
  container: "#ffffff",
  logo: "#005FF9",
  hoveredNav: "#e2e5e9",
  hoveredItem: "#f5f5f7",
  hr: "#d8dbe2",
  popup: "#ffffff",
  text: {
    primary: "#333333",
    secondary: "#a5a7ab",
  },
};

const darkTheme: DefaultTheme = {
  body: "#19191a",
  header: "#232324",
  container: "#232324",
  logo: "#ffffff",
  hoveredNav: "#2b2b2c",
  hoveredItem: "#2c2c2d",
  hr: "#0f0f10",
  popup: "#303030",
  text: {
    primary: "#ffffff",
    secondary: "#8c8e94",
  },
};

export { whiteTheme, darkTheme };
