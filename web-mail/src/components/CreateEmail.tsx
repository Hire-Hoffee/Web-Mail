import React from "react";

import StyledCreateEmail from "./styles/StyledCreateEmail";
import CloseBtnSVG from "./styles/svgs/CloseBtnSVG";
import StapleSVG from "./styles/svgs/StapleSVG";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { changeNewLetterPopup } from "@/store/utilsSlice";

function CreateEmail() {
  const newLetterPopup = useAppSelector((state) => state.utils.newLetterPopup);
  const dispatch = useAppDispatch();

  return (
    <StyledCreateEmail
      className={newLetterPopup ? "showPopup" : "hidePopup"}
      onClick={() => dispatch(changeNewLetterPopup(false))}
    >
      <div
        onClick={(e) => {
          return e.stopPropagation();
        }}
      >
        <div>
          <span onClick={() => dispatch(changeNewLetterPopup(false))}>
            <CloseBtnSVG />
          </span>
          <label>
            Кому <input type="text" />
          </label>
          <hr />
          <label>
            Тема <input type="text" />
          </label>
          <hr />
          <div>
            <button>
              <StapleSVG />
              <span>Прикрепить файл</span>
            </button>
            <hr />
          </div>
        </div>
        <div>
          <textarea name="" id="" cols={30} rows={10}></textarea>
        </div>
        <div>
          <button>Отправить</button>
          <button onClick={() => dispatch(changeNewLetterPopup(false))}>Отменить</button>
        </div>
      </div>
    </StyledCreateEmail>
  );
}

export default CreateEmail;
