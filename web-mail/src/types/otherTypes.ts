export type colorTheme = {
  theme: string | null;
  isLoading: boolean;
};

export type NavProps = {
  to: string;
  svgComponent: JSX.Element;
  name: string;
};
