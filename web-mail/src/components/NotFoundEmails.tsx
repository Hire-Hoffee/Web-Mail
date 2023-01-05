import React from "react";
import NotFoundStyles from "./styles/NotFoundStyles";
import noLetters from "@/assets/images/noLetters.png";
import noLettersDark from "@/assets/images/noLettersDark.png";
import { useAppSelector } from "@/store/hooks";

function NotFoundEmails() {
  const theme = useAppSelector((state) => state.utils.theme);

  return (
    <NotFoundStyles>
      <img src={theme === "white" ? noLetters : noLettersDark} alt="no letters" />
      <h1>Писем нет</h1>
    </NotFoundStyles>
  );
}

export default NotFoundEmails;
