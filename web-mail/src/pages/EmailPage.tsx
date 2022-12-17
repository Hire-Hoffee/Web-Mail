import React, { useEffect, useState } from "react";
import StyledEmailPage from "../components/styles/StyledEmailPage";
import { getOneMail } from "../services/apiRequests";
import { EmailType } from "../services/apiRequests";
import { useParams } from "react-router-dom";

import defaultAvatar from "../assets/images/defaultAvatar.png";
import bookmarkIcon from "../assets/images/bookmarkIcon.svg";
import importantIcon from "../assets/images/importantIcon.svg";
import billings from "../assets/images/billings.svg";
import finances from "../assets/images/finances.svg";
import orders from "../assets/images/orders.svg";
import tickets from "../assets/images/tickets.svg";
import registrations from "../assets/images/registrations.svg";
import travelings from "../assets/images/travelings.svg";
import blueDot from "../assets/images/blueDot.svg";

function EmailPage(): JSX.Element {
  const [email, setEmail] = useState<EmailType | null>(null);
  const { title } = useParams();

  const flagDict: any = {
    Заказы: orders,
    Финансы: finances,
    Регистрации: registrations,
    Путешествия: travelings,
    Билеты: tickets,
    "Штрафы и налоги": billings,
  };

  useEffect(() => {
    (async () => {
      const result = await getOneMail("/email/" + title);
      setEmail(result);
    })();
  }, []);

  return (
    <StyledEmailPage>
      <div className="header">
        <h1>{email?.title}</h1>
        <div>
          {email?.flag || "" in flagDict ? (
            <img src={flagDict[email?.flag || ""]} alt="flag" />
          ) : (
            false
          )}
          {email?.flag}
        </div>
      </div>

      <div className="user">
        <div>
          {email?.read === false ? <img src={blueDot} alt="status" className="blueDot" /> : ""}
        </div>
        <div>
          <img src={email?.author.avatar || defaultAvatar} alt="avatar" className="avatar" />
        </div>
        <div className="user__info">
          <div>
            <span className="user__info__name">{email?.author.name} </span>
            <span className="user__info__date">
              {new Date(email?.date || "").toLocaleDateString("ru-RU", {
                month: "short",
                day: "numeric",
              })}
            </span>
            <span className="user__info__date">
              {email?.bookmark ? (
                <img src={bookmarkIcon} alt="status" />
              ) : email?.important ? (
                <img src={importantIcon} alt="status" />
              ) : email?.bookmark && email?.important ? (
                <div>
                  <img src={bookmarkIcon} alt="status" /> <img src={importantIcon} alt="status" />
                </div>
              ) : (
                false
              )}
            </span>
          </div>
          <div className="emailTo">
            {email?.to.map((item, index, array) => {
              return (
                <span key={item.email}>
                  {item.name}
                  {array.slice(-1)[0].email !== item.email ? ", " : ""}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {email?.doc?.img ? (
        <div>
          <img className="bigIMG" src={email?.doc?.img} alt="doc" />
          <div className="downloadIMG">
            {Object.keys(email?.doc).length} объект{" "}
            <a href={email?.doc?.img} download="doc.png">
              Скачать
            </a>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="email_text">
        <p>{email?.text}</p>
      </div>
    </StyledEmailPage>
  );
}

export default EmailPage;
