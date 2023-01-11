import themesDictionary from "@/utils/themes/themesDictionary";
import { changeThemeState, changeSettingsOpen } from "@/store/utilsSlice";

export type GetDataType<Type> = {
  fetchData: Function;
  urlString: string;
  functions: React.Dispatch<React.SetStateAction<Type | null>>[];
};

export type ChooseFillType = {
  theme: string | null;
  dictionary: typeof themesDictionary;
};

export type ChangeParamsType = {
  value: [string, string];
  setParams: Function;
};

export type changeThemeType = {
  themeStyle: string;
  useDispatch: Function;
  changeSettings: typeof changeSettingsOpen;
  changeTheme: typeof changeThemeState;
};

export type FilterResultType<Type> = {
  emails: Array<Type> | null;
  searchParams: URLSearchParams;
  setParams: Function;
  setEmails: React.Dispatch<React.SetStateAction<Type[] | null>>;
};

export type ChangeLangType = {
  lang: string;
  useDispatch: Function;
  changeLang: Function;
  changeSettings: typeof changeSettingsOpen;
};

export type SetFilterSearchType = {
  searchParams: URLSearchParams;
  filterItemNameDict: { read: string; bookmark: string; important: string; doc: string };
  t: Function;
};
