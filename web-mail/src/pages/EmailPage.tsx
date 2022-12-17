import React, { useEffect, useState } from "react";
import StyledEmailPage from "../components/styles/StyledEmailPage";
import { getOneMail } from "../services/apiRequests";
import { EmailType } from "../services/apiRequests";
import defaultAvatar from "../assets/images/defaultAvatar.png";
import { useParams } from "react-router-dom";

function EmailPage(): JSX.Element {
  const [email, setEmail] = useState<EmailType | null>(null);
  const { title } = useParams();

  useEffect(() => {
    (async () => {
      const [result] = await getOneMail("/email/" + title);
      setEmail(result);
    })();
  }, []);

  return (
    <StyledEmailPage>
      <div className="header">
        <h1>{email?.title}</h1>
        <div>
          <img src="" alt="flag" />
          {email?.flag}
        </div>
      </div>

      <div className="user">
        <div>
          <img src={email?.author.avatar || defaultAvatar} alt="avatar" className="avatar" />
        </div>
        <div className="user__info">
          <div>
            {email?.author.name}{" "}
            {new Date(email?.date || "").toLocaleDateString("ru-RU", {
              month: "short",
              day: "numeric",
            })}
          </div>
          <div>
            {email?.to.map((item) => {
              return <span key={item.email}>{item.name}</span>;
            })}
          </div>
        </div>
      </div>

      <div>
        <img src="" alt="data" />
        <img src="" alt="data" />
        <img src="" alt="data" />
      </div>

      <div>
        <p>{email?.text}</p>
      </div>
    </StyledEmailPage>
  );
}

export default EmailPage;
