import {
  GetDataType,
  ChooseFillType,
  ChangeParamsType,
  changeThemeType,
  FilterResultType,
  ChangeLangType,
  SetFilterSearchType,
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

export function calculateFileSize(files: { img: string }[]): string {
  const arrOfSizes: number[] = [];

  files.forEach((file) => {
    const base64str = file.img.split(",")[1];
    const decodedString = window.atob(base64str);
    return arrOfSizes.push(Math.round(decodedString.length / 1000));
  });

  const sumOfSizes = arrOfSizes.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return `(${Math.round(sumOfSizes)}Kb)`;
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

export function changeLang({
  lang,
  useDispatch,
  changeSettings,
  changeLang,
  changeSiteLang,
}: ChangeLangType) {
  localStorage.setItem("lang", lang);
  useDispatch(changeSettings(false));
  useDispatch(changeSiteLang(lang));
  return changeLang(lang);
}

export function setFilterSearchName({
  searchParams,
  filterItemNameDict,
  t,
}: SetFilterSearchType): JSX.Element {
  const params: string[][] = [];
  for (let entry of searchParams.entries()) {
    params.push(entry);
  }
  if (params.length === 1 && params[0][0] in filterItemNameDict) {
    return <p>{filterItemNameDict[params[0][0] as keyof typeof filterItemNameDict]}</p>;
  }
  if ((params.length === 1 && params[0][1] === "all") || params.length === 0) {
    return <p>{t("filter.filter")}</p>;
  }
  return <p>{t("filter.filters")}</p>;
}

export function timeDisplay(date: Date, lang: string) {
  const localization = lang === "en" ? "en-US" : "ru-RU";
  if (Number(new Date()) - Number(new Date(date)) < 8.64e7) {
    return new Date(date).toLocaleTimeString(localization, {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  if (new Date(date).getFullYear() < new Date().getFullYear()) {
    return new Date(date).toLocaleDateString(localization, {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
  }
  return new Date(date).toLocaleDateString(localization, {
    month: "short",
    day: "numeric",
  });
}

export function showImages(imageFiles: File[], setImages: Function, setImagesSizeCheck: Function) {
  const images: (string | ArrayBuffer)[] = [];
  const fileReaders: FileReader[] = [];
  const checkImagesSize: { img: string }[] = [];
  let isCancel = false;

  if (imageFiles.length) {
    imageFiles.forEach((file) => {
      const fileReader = new FileReader();
      fileReaders.push(fileReader);
      fileReader.onload = (e) => {
        if (e.target?.result) {
          images.push(e.target?.result);
        }
        if (images.length === imageFiles.length && !isCancel) {
          setImages(images);
          images.forEach((img) => {
            checkImagesSize.push({ img: String(img) });
          });
          setImagesSizeCheck(checkImagesSize);
        }
      };
      fileReader.readAsDataURL(file);
    });
  }
  return () => {
    isCancel = true;
    fileReaders.forEach((fileReader) => {
      if (fileReader.readyState === 1) {
        fileReader.abort();
      }
    });
  };
}

export function changeHandler(
  e: React.ChangeEvent<HTMLInputElement>,
  imageTypeRegex: RegExp,
  setImageFiles: Function
) {
  const { files } = e.target;
  if (files) {
    const validImageFiles = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.match(imageTypeRegex)) {
        validImageFiles.push(files[i]);
      }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      return;
    }
    alert("Selected images are not of valid type!");
  }
}
