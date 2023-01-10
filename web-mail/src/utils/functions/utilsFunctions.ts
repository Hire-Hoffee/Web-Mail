import {
  GetDataType,
  ChooseFillType,
  ChangeParamsType,
  changeThemeType,
  FilterResultType,
} from "@/types/utilsFuncType";

export async function getData<Type>({ fetchData, urlString, functions }: GetDataType<Type>) {
  const result: Type = await fetchData(urlString);
  functions.forEach((func) => {
    return func(result);
  });
  return;
}

export function chooseSVGFill({ theme, dictionary }: ChooseFillType) {
  return theme && theme in dictionary
    ? dictionary[theme as keyof typeof dictionary].svgFill
    : undefined;
}

export function changeSearchParams({ value, setParams }: ChangeParamsType) {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  if (params.get(value[0]) === value[1]) {
    params.delete(value[0]);
    return setParams(params.toString());
  }
  params.append(...value);
  if (params.get(value[0]) !== "all") {
    params.delete("letters");
    return setParams(params.toString());
  }
  if (value[0] === "reset") {
    return setParams();
  }
  return setParams(params.toString());
}

export function calculateFileSize(file: string): string {
  const base64str = file.split(",")[1];
  const decodedString = window.atob(base64str);
  return `(${Math.round(decodedString.length / 1000)}Kb)`;
}

export function eventListener(event: Event) {
  return event.preventDefault();
}

export function changeTheme({
  themeStyle,
  useDispatch,
  changeTheme,
  changeSettings,
}: changeThemeType) {
  localStorage.setItem("theme", themeStyle);
  useDispatch(changeSettings(false));
  useDispatch(changeTheme(themeStyle));
  return;
}

export function filterResult<Type>({
  emails,
  searchParams,
  setEmails,
  setParams,
}: FilterResultType<Type>) {
  if (emails) {
    const params: string[][] = [];
    let result = emails;

    for (let entry of searchParams.entries()) {
      params.push(entry);
    }
    if (params.length === 0) {
      setParams({ letters: "all" });
      return setEmails(emails);
    }
    params.forEach((param, index, array) => {
      if (param[1] === "all") {
        return setParams({ letters: "all" });
      }
      result = result.filter((letter) => {
        return String(letter[array[index][0] as keyof Type]) === array[index][1];
      });
    });
    return setEmails(result);
  }
}
