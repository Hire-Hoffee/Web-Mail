export type Utils = {
  theme: string | null;
  isLoading: boolean;
  toggleFilter: boolean;
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
};
