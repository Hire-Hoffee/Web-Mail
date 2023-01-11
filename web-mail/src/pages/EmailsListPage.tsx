import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { useParams, useSearchParams } from "react-router-dom";

import StyledEmailsContainer from "@/components/styles/StyledEmailsContainer";
import NotFoundEmails from "@/components/NotFoundEmails";
import LoadingComponent from "@/components/LoadingComponent";
import EmailCart from "@/components/EmailCart";

import EmailType from "@/types/emailType";
import { getEmails } from "@/services/apiRequests";
import { getData, filterResult } from "@/utils/functions/utilsFunctions";

function EmailsListPage() {
  const [emails, setEmails] = useState<EmailType[] | null>(null);
  const [defaultEmails, setDefaultEmails] = useState<EmailType[] | null>(null);
  const { folder } = useParams();
  const isLoading = useAppSelector((state) => state.utils.isLoading);
  const theme = useAppSelector((state) => state.utils.theme);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    filterResult({ emails: defaultEmails, searchParams, setEmails, setParams: setSearchParams });
  }, [searchParams]);

  useEffect(() => {
    const url = "/" + folder;
    getData({ fetchData: getEmails, urlString: url, functions: [setEmails, setDefaultEmails] });
    setSearchParams("?letters=all");

    folder
      ? (document.title = `WebMail - ${folder.charAt(0).toUpperCase() + folder.slice(1)}`)
      : "WebMail";
  }, [folder]);

  return (
    <StyledEmailsContainer className={theme === "anime" ? "animeNotFound" : ""}>
      {isLoading ? (
        <LoadingComponent />
      ) : emails?.length === 0 ? (
        <NotFoundEmails />
      ) : (
        emails?.map((item) => {
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
        })
      )}
    </StyledEmailsContainer>
  );
}

export default EmailsListPage;
