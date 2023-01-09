import React from "react";
import EmailType from "@/types/emailType";

import defaultAvatar from "@/assets/images/defaultAvatar.png";
import bookmarkIcon from "@/assets/images/bookmarkIcon.svg";
import importantIcon from "@/assets/images/importantIcon.svg";
import billings from "@/assets/images/billings.svg";
import finances from "@/assets/images/finances.svg";
import orders from "@/assets/images/orders.svg";
import tickets from "@/assets/images/tickets.svg";
import registrations from "@/assets/images/registrations.svg";
import travelings from "@/assets/images/travelings.svg";
import blueDot from "@/assets/images/blueDot.svg";

function EmailComponent(email: EmailType): JSX.Element {
  const flagDict = {
    Заказы: orders,
    Финансы: finances,
    Регистрации: registrations,
    Путешествия: travelings,
    Билеты: tickets,
    "Штрафы и налоги": billings,
  };

  const calculateFileSize = (file: string): string => {
    const base64str = file.split(",")[1];
    const decodedString = window.atob(base64str);
    return `(${Math.round(decodedString.length / 1000)}Kb)`;
  };

  return (
    <>
      <div>
        <h1>{email.title}</h1>
        <div>
          {email.flag || "" in flagDict ? (
            <img src={flagDict[(email.flag as keyof typeof flagDict) || ""]} alt="flag" />
          ) : (
            false
          )}
          {email.flag}
        </div>
      </div>

      <div>
        <div>{email.read === false ? <img src={blueDot} alt="status" /> : ""}</div>
        <div>
          <img src={email.author.avatar || defaultAvatar} alt="avatar" />
        </div>
        <div>
          <div>
            <span>{email.author.name} </span>
            <span>
              {new Date(email.date || "").toLocaleDateString("ru-RU", {
                month: "short",
                day: "numeric",
              })}
            </span>
            <span>
              {email.bookmark && email.important ? (
                <>
                  <img src={bookmarkIcon} alt="status" /> <img src={importantIcon} alt="status" />
                </>
              ) : email.bookmark ? (
                <img src={bookmarkIcon} alt="status" />
              ) : email.important ? (
                <img src={importantIcon} alt="status" />
              ) : (
                false
              )}
            </span>
          </div>
          <div>
            {email.to.map((item, index, array) => {
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

      <div>
        {email.doc?.img ? (
          <>
            <img src={email.doc?.img} alt="doc" />
            <div>
              {Object.keys(email.doc).length} объект{" "}
              <a href={email.doc?.img} download="doc.png">
                Скачать{" "}
              </a>
              <span>{calculateFileSize(email.doc.img)}</span>
            </div>
          </>
        ) : (
          ""
        )}
      </div>

      <div>
        <p>{email.text}</p>
      </div>
    </>
  );
}

export default EmailComponent;
