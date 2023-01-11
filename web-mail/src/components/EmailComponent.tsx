import React from "react";
import { useTranslation } from "react-i18next";
import EmailType from "@/types/emailType";
import { useAppSelector } from "@/store/hooks";

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

import { calculateFileSize, timeDisplay } from "@/utils/functions/utilsFunctions";

function EmailComponent(email: EmailType): JSX.Element {
  const { t } = useTranslation();
  const lang = useAppSelector((state) => state.utils.lang);

  const flagDict = {
    Заказы: orders,
    Финансы: finances,
    Регистрации: registrations,
    Путешествия: travelings,
    Билеты: tickets,
    "Штрафы и налоги": billings,
  };

  return (
    <>
      <div>
        <h1>{email.title}</h1>
        <div>
          {email.flag || "" in flagDict ? (
            <>
              <img src={flagDict[(email.flag as keyof typeof flagDict) || ""]} alt="flag" />
              <p>{t(`flags.${email.flag}`)}</p>
            </>
          ) : (
            false
          )}
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
              {Number(new Date()) - Number(new Date(email.date)) < 8.64e7 ? t("other.today") : ""}
              &nbsp;
              {timeDisplay(new Date(email.date), lang)}
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
        {email.doc ? (
          <>
            <div>
              {email.doc.map((item) => {
                return <img src={item.img} alt="doc" key={item.img.slice(0, 10)} />;
              })}
            </div>

            <div>
              {email.doc.length} {t("other.filesQuantity")}{" "}
              {email.doc.length === 1 ? (
                <a href={email.doc[0].img} download="doc.png">
                  {t("other.downloadFile")}{" "}
                </a>
              ) : (
                <a href={email.doc[0].img} download="doc.png">
                  {t("other.downloadFiles")}{" "}
                </a>
              )}
              <span>{calculateFileSize(email.doc)}</span>
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
