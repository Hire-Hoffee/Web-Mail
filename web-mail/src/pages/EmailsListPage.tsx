import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";

import StyledEmailsContainer from "@/components/styles/StyledEmailsContainer";
import EmailCart from "@/components/EmailCart";
import EmailType from "@/types/emailType";
import { getEmails } from "@/services/apiRequests";
import { useParams, useSearchParams } from "react-router-dom";
import NotFoundEmails from "@/components/NotFoundEmails";
import LoadingComponent from "@/components/LoadingComponent";

function EmailsListPage() {
  const [emails, setEmails] = useState<EmailType[] | undefined>(undefined);
  const [defaultEmails, setDefaultEmails] = useState<EmailType[] | undefined>(undefined);
  const { folder } = useParams();
  const isLoading = useAppSelector((state) => state.utils.isLoading);
  const [searchParams, setSearchParams] = useSearchParams();

  function filterResult() {
    const params: string[][] = [];
    let result = defaultEmails;

    for (let entry of searchParams.entries()) {
      params.push(entry);
    }

    if (params.length == 0) {
      setSearchParams({ letters: "all" });
    }

    if (params.length !== 0) {
      params.forEach((param, index, array) => {
        if (param[0] === "letters" && param[1] === "all") {
          return setSearchParams({ letters: "all" });
        }

        result = result?.filter((letter: EmailType | any) => {
          return String(letter[array[index][0]]) === array[index][1];
        });
      });
      return setEmails(result);
    }

    return setEmails(defaultEmails);
  }

  useEffect(() => {
    filterResult();
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      const result = await getEmails("/" + folder);
      setEmails(result);
      setDefaultEmails(result);
    })();
  }, [folder]);

  return (
    <StyledEmailsContainer>
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
