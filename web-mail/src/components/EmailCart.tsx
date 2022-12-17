import React from "react";
import StyledEmailsCart from "./styles/StyledEmailCard";
import { EmailType } from "../services/apiRequests";

import defaultAvatar from "../assets/images/defaultAvatar.png";
import bookmarkIcon from "../assets/images/bookmarkIcon.svg";
import importantIcon from "../assets/images/importantIcon.svg";
import billings from "../assets/images/billings.svg";
import finances from "../assets/images/finances.svg";
import orders from "../assets/images/orders.svg";
import tickets from "../assets/images/tickets.svg";
import registrations from "../assets/images/registrations.svg";
import travelings from "../assets/images/travelings.svg";

function EmailCart(email: EmailType) {
  const flagDict: any = {
    Заказы: orders,
    Финансы: finances,
    Регистрации: registrations,
    Путешествия: travelings,
    Билеты: tickets,
    "Штрафы и налоги": billings,
  };

  return (
    <StyledEmailsCart>
      <div>
        <img src={email.author.avatar || defaultAvatar} alt="avatar" className="avatar" />
      </div>
      <div>
        <p className={email.read === false ? "unread" : ""}>
          {email.author.name} {email.author.surname}
        </p>
      </div>
      <div>
        {email.bookmark ? (
          <img src={bookmarkIcon} alt="status" />
        ) : email.important ? (
          <img src={importantIcon} alt="status" />
        ) : (
          false
        )}
      </div>
      <div>
        <p>
          <span className={email.read === false ? "unread" : ""}>
            {email.title.slice(0, 30) + "..."}{" "}
          </span>
          <span className="textLighter">{email.text.slice(0, 70) + "..."}</span>
        </p>
      </div>
      <div>{email.flag in flagDict ? <img src={flagDict[email.flag]} alt="flag" /> : false}</div>
      <div>
        <span className="textLighter fontSmall">
          {new Date(email.date).toLocaleDateString("ru-RU", { month: "short", day: "numeric" })}
        </span>
      </div>
    </StyledEmailsCart>
  );
}

export default EmailCart;
