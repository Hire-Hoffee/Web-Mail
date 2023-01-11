import React from "react";
import StyledEmailsCart from "./styles/StyledEmailCard";
import EmailType from "@/types/emailType";
import { Link } from "react-router-dom";
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
import StapleSVG from "./styles/svgs/StapleSVG";

import { timeDisplay } from "@/utils/functions/utilsFunctions";

function EmailCart(email: EmailType): JSX.Element {
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
    <Link to={"/email?title=" + email.title}>
      <StyledEmailsCart>
        <div>{email.read === false ? <img src={blueDot} alt="status" /> : ""}</div>
        <div>
          <img src={email.author.avatar || defaultAvatar} alt="avatar" />
        </div>
        <div>
          <p className={email.read === false ? "unread" : ""}>
            {email.author.name} {email.author.surname}
          </p>
        </div>
        <div>
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
        </div>
        <div className={email.read === false ? "unread" : ""}>{email.title} &nbsp;</div>
        <div>{email.text}</div>
        <div>
          {email.flag in flagDict ? (
            <span>
              <img src={flagDict[email.flag as keyof typeof flagDict]} alt="flag" />
            </span>
          ) : (
            false
          )}
          <span>{email.doc ? <StapleSVG /> : false}</span>
        </div>
        <div>
          <span>{timeDisplay(new Date(email.date), lang)}</span>
        </div>
        <hr />
      </StyledEmailsCart>
    </Link>
  );
}

export default EmailCart;
