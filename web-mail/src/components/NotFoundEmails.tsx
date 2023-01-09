import React from "react";
import NotFoundStyles from "./styles/StyledNotFound";
import noLetters from "@/assets/images/noLetters.png";
import noLettersDark from "@/assets/images/noLettersDark.png";
import notFound from "@/assets/images/notFound.svg";
import { useAppSelector } from "@/store/hooks";

function NotFoundEmails(): JSX.Element {
  const theme = useAppSelector((state) => state.utils.theme);

  return (
    <NotFoundStyles>
      <img
        src={theme === "dark" ? noLettersDark : theme === "anime" ? notFound : noLetters}
        alt="no letters"
      />
      <h1>Писем нет</h1>
    </NotFoundStyles>
  );
}

export default NotFoundEmails;
