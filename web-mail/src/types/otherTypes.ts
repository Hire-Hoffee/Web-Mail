export type Utils = {
  theme: string | null;
  isLoading: boolean;
  toggleFilter: boolean;
  settingsOpen: boolean | null;
  themeSwitcher: boolean;
  langSwitcher: boolean;
};

export type NavProps = {
  to: string;
  svgComponent: JSX.Element;
  name: string;
};

export type FilterItemProp = {
  name: string;
  svg?: string;
  svgComponent?: JSX.Element;
  query: [string, string];
};

export type svgFillProp = {
  svgFill?: string;
};
