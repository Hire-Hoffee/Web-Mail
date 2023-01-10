import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getOneMail } from "@/services/apiRequests";
import { getData } from "@/utils/functions/utilsFunctions";
import EmailType from "@/types/emailType";

import StyledEmailPage from "@/components/styles/StyledEmailPage";

import EmailComponent from "@/components/EmailComponent";
import LoadingComponent from "@/components/LoadingComponent";

function EmailPage(): JSX.Element {
  const [email, setEmail] = useState<EmailType | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const url = `/email?title=${searchParams.get("title")}`;
    getData<EmailType>({ fetchData: getOneMail, urlString: url, functions: [setEmail] });
    document.title = `WebMail - Письмо`;
  }, []);

  return (
    <>
      <StyledEmailPage>
        {email ? (
          <EmailComponent
            author={email.author}
            folder={email.folder}
            bookmark={email.bookmark}
            date={email.date}
            to={email.to}
            title={email.title}
            important={email.important}
            text={email.text}
            read={email.read}
            flag={email.flag}
            key={email.date}
            doc={email.doc}
          />
        ) : (
          <LoadingComponent />
        )}
      </StyledEmailPage>
    </>
  );
}

export default EmailPage;
