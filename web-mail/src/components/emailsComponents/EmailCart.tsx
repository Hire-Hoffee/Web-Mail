import React from "react";
import StyledEmailsCart from "../styles/styledEmails/StyledEmailCard";
import EmailType from "@/types/emailType";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";

import defaultAvatar from "@/assets/images/defaultAvatar.png";
import bookmarkIcon from "@/assets/images/bookmarkIcon.svg";
import addBookmarkIcon from "@/assets/images/addBookmark.svg";
import importantIcon from "@/assets/images/importantIcon.svg";
import billings from "@/assets/images/billings.svg";
import finances from "@/assets/images/finances.svg";
import orders from "@/assets/images/orders.svg";
import tickets from "@/assets/images/tickets.svg";
import registrations from "@/assets/images/registrations.svg";
import travelings from "@/assets/images/travelings.svg";
import blueDot from "@/assets/images/blueDot.svg";
import grayDot from "@/assets/images/grayDot.svg";

import ImagesPopup from "./ImagesPopup";

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
        <div onClick={(e) => e.preventDefault()}>
          {email.read === false ? (
            <img src={blueDot} alt="status" />
          ) : (
            <img src={grayDot} alt="status" className="greyDot" />
          )}
          <div></div>
        </div>
        <div>
          <img src={email.author.avatar || defaultAvatar} alt="avatar" />
          <input onClick={(e) => e.stopPropagation()} type="checkbox" />
        </div>
        <div>
          <p className={email.read === false ? "unread" : ""}>
            {email.author.name} {email.author.surname}
          </p>
        </div>
        <div onClick={(e) => e.preventDefault()}>
          {email.bookmark && email.important ? (
            <span>
              <img src={bookmarkIcon} alt="status" /> <img src={importantIcon} alt="status" />
            </span>
          ) : email.bookmark ? (
            <img src={bookmarkIcon} alt="status" />
          ) : email.important ? (
            <span>
              <img src={addBookmarkIcon} alt="add_bookmark" className="addBookmark" />
              <img src={importantIcon} alt="status" />
            </span>
          ) : (
            <img src={addBookmarkIcon} alt="add_bookmark" className="addBookmark" />
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
          {email.doc ? <ImagesPopup img={email.doc[0].img} size={email.doc[0].size} /> : false}
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
