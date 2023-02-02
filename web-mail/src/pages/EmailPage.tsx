import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getOneMail } from "@/services/apiRequests";
import { getData } from "@/utils/functions/utilsFunctions";
import { getEmailImages } from "@/services/apiRequests";
import EmailType from "@/types/emailType";
import { useAppSelector } from "@/store/hooks";

import StyledEmailPage from "@/components/styles/styledEmails/StyledEmailPage";

import EmailComponent from "@/components/emailsComponents/EmailComponent";
import LoadingComponent from "@/components/utilsComponents/LoadingComponent";

function EmailPage(): JSX.Element {
  const [email, setEmail] = useState<EmailType | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [images, setImages] = useState<{ img: string }[] | undefined>(undefined);
  const isImages = useAppSelector((state) => state.utils.isImages);

  useEffect(() => {
    const url = `/email?title=${searchParams.get("title")}`;
    getData<EmailType>({ fetchData: getOneMail, urlString: url, functions: [setEmail] });
    document.title = `WebMail - Письмо`;
  }, []);

  useEffect(() => {
    if (isImages != undefined) {
      (async () => {
        const url = `/email?title=${searchParams.get("title")}&imgs=true`;
        const result = await getEmailImages(url);
        setImages(result);
      })();
    }
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
            doc={images}
            img={email.doc}
          />
        ) : (
          <LoadingComponent />
        )}
      </StyledEmailPage>
    </>
  );
}

export default EmailPage;
