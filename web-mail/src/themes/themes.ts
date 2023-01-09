import { DefaultTheme } from "styled-components";

const whiteTheme: DefaultTheme = {
  body: "#f6f7f8",
  header: "#ffffff",
  container: "#ffffff",
  logo: "#005FF9",
  hoveredNav: "#e2e5e9",
  hoveredItem: "#f5f5f7",
  hr: "#d8dbe2",
  hrNav: "#d8dbe2",
  popup: "#ffffff",
  text: {
    global: "#333333",
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
  hrNav: "#0f0f10",
  popup: "#303030",
  text: {
    global: "#ffffff",
    primary: "#ffffff",
    secondary: "#8c8e94",
  },
};

const brownTheme: DefaultTheme = {
  body: "#4A352F",
  header: "#3d2725",
  container: "#ffffff",
  logo: "#ffffff",
  hoveredNav: "#705047",
  hoveredItem: "#f5f5f7",
  hr: "#d8dbe2",
  hrNav: "#966b5f",
  popup: "#4a352f",
  text: {
    global: "#ffffff",
    primary: "#333333",
    secondary: "#a5a7ab",
  },
};

export { whiteTheme, darkTheme, brownTheme };
