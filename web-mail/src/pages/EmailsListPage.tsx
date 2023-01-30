import React, { useEffect, useState, useRef } from "react";
import { useAppSelector } from "@/store/hooks";
import { useParams, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

import StyledEmailsContainer from "@/components/styles/StyledEmailsContainer";
import NotFoundEmails from "@/components/NotFoundEmails";
import LoadingComponent from "@/components/LoadingComponent";
import EmailCart from "@/components/EmailCart";
import SpinnerSVG from "@/components/styles/svgs/SpinnerSVG";

import EmailType from "@/types/emailType";
import { getEmails } from "@/services/apiRequests";
import { getData, filterResult } from "@/utils/functions/utilsFunctions";

function EmailsListPage() {
  const [emails, setEmails] = useState<EmailType[] | null>(null);
  const [nextEmailsLength, setNextEmailsLength] = useState<number>(20);
  const [defaultEmails, setDefaultEmails] = useState<EmailType[] | null>(null);
  const [page, setPage] = useState<number>(2);

  const isLoading = useAppSelector((state) => state.utils.isLoading);
  const theme = useAppSelector((state) => state.utils.theme);
  const [searchParams, setSearchParams] = useSearchParams();

  const { folder } = useParams();
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  const scrollEl = useRef<HTMLElement>(null);

  useEffect(() => {
    if (inView && nextEmailsLength === 20) {
      (async () => {
        setPage(page + 1);

        const nextEmails = await getEmails(`/${folder}/${page}`);
        setNextEmailsLength(nextEmails.length);
        setEmails((prevEmails) => [...(prevEmails as EmailType[]), ...nextEmails]);
        setDefaultEmails((prevEmails) => [...(prevEmails as EmailType[]), ...nextEmails]);
      })();
    }
  }, [inView]);

  useEffect(() => {
    filterResult({ emails: defaultEmails, searchParams, setEmails, setParams: setSearchParams });
  }, [searchParams]);

  useEffect(() => {
    folder ? (document.title = `WebMail - ${t(`navbar.${folder}`)}`) : "WebMail";
  }, [folder, t]);

  useEffect(() => {
    setPage(2);
    setNextEmailsLength(20);
    scrollEl.current?.scrollTo({ top: 0, behavior: "auto" });

    const url = `/${folder}/1`;
    getData({ fetchData: getEmails, urlString: url, functions: [setEmails, setDefaultEmails] });

    setSearchParams("?letters=all");
  }, [folder]);

  return (
    <StyledEmailsContainer className={theme === "anime" ? "animeNotFound" : ""} ref={scrollEl}>
      {isLoading && inView === false ? (
        <LoadingComponent svgFill={theme === "anime" ? "#ffffff" : undefined} />
      ) : emails?.length === 0 ? (
        <NotFoundEmails />
      ) : (
        <>
          {emails?.map((item) => {
            return (
              <EmailCart
                author={item.author}
                folder={item.folder}
                bookmark={item.bookmark}
                date={item.date}
                to={item.to}
                title={item.title}
                important={item.important}
                text={item.text}
                read={item.read}
                flag={item.flag}
                key={item.date}
                doc={item.doc}
              />
            );
          })}
          <div ref={ref} className="moreEmailsLoader">
            {inView && nextEmailsLength === 20 ? (
              <SpinnerSVG />
            ) : nextEmailsLength < 20 ? (
              <p>{t("other.noMoreLetters")}</p>
            ) : (
              false
            )}
          </div>
        </>
      )}
    </StyledEmailsContainer>
  );
}

export default EmailsListPage;
