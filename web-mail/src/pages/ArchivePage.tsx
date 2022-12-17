import React, { useEffect, useState } from "react";
import StyledEmailsContainer from "../components/styles/StyledEmailsContainer";
import EmailCart from "../components/EmailCart";
import { EmailType } from "../services/apiRequests";
import { getEmails } from "../services/apiRequests";

function ArchivePage(): JSX.Element {
  const [emails, setEmails] = useState<EmailType[] | null>(null);

  useEffect(() => {
    (async () => {
      const result = await getEmails("/archive");
      setEmails(result);
    })();
  }, []);

  return (
    <StyledEmailsContainer>
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
          />
        );
      })}
    </StyledEmailsContainer>
  );
}

export default ArchivePage;
