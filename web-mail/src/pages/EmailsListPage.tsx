import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";

import StyledEmailsContainer from "@/components/styles/StyledEmailsContainer";
import EmailCart from "@/components/EmailCart";
import EmailType from "@/types/emailType";
import { getEmails } from "@/services/apiRequests";
import { useParams } from "react-router-dom";
import NotFoundEmails from "@/components/NotFoundEmails";
import LoadingComponent from "@/components/LoadingComponent";

function EmailsListPage() {
  const [emails, setEmails] = useState<EmailType[] | null>(null);
  const { folder } = useParams();
  const isLoading = useAppSelector((state) => state.utils.isLoading);

  useEffect(() => {
    (async () => {
      const result = await getEmails("/" + folder);
      setEmails(result);
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
