import { DefaultTheme } from "styled-components";

const whiteTheme: DefaultTheme = {
  colors: {
    body: "#f6f7f8",
    selected: "#e2e5e9",
    header: "#fff",
    text: {
      primary: "#000",
      secondary: "#333333",
    },
    logo: "#005FF9",
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    body: "#19191a",
    header: "#232324",
    selected: "#2b2b2c",
    text: {
      primary: "#fff",
      secondary: "#E7E8EA",
    },
    logo: "#fff",
  },
};

export { whiteTheme, darkTheme };
