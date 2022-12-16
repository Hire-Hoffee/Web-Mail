export type ThemeType = {
  colors: {
    body: string;
    header: string;
  };
};

const whiteTheme: ThemeType = {
  colors: {
    body: "#f6f7f8",
    header: "#fff",
  },
};

const darkTheme: ThemeType = {
  colors: {
    body: "#19191a",
    header: "#232324",
  },
};

export { whiteTheme, darkTheme };
