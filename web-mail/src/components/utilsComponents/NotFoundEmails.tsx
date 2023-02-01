import React from "react";
import NotFoundStyles from "../styles/styledUtils/StyledNotFound";
import noLetters from "@/assets/images/noLetters.png";
import noLettersDark from "@/assets/images/noLettersDark.png";
import notFound from "@/assets/images/notFound.svg";
import { useAppSelector } from "@/store/hooks";
import { useTranslation } from "react-i18next";

function NotFoundEmails(): JSX.Element {
  const theme = useAppSelector((state) => state.utils.theme);
  const { t } = useTranslation();

  return (
    <NotFoundStyles>
      <img
        src={theme === "dark" ? noLettersDark : theme === "anime" ? notFound : noLetters}
        alt="no letters"
      />
      <h1>{t("other.noLetters")}</h1>
    </NotFoundStyles>
  );
}

export default NotFoundEmails;
