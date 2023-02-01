import React from "react";

import StyledCreateEmail from "../styles/styledEmails/StyledCreateEmail";
import CloseBtnSVG from "../styles/svgs/CloseBtnSVG";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { changeNewLetterPopup } from "@/store/utilsSlice";
import { useTranslation } from "react-i18next";

import TextEditor from "../textEditorComponents/TextEditor";
import AddFile from "./AddFile";

function CreateEmail() {
  const newLetterPopup = useAppSelector((state) => state.utils.newLetterPopup);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <StyledCreateEmail className={newLetterPopup ? "showPopup" : "hidePopup"}>
      <div>
        <div>
          <span onClick={() => dispatch(changeNewLetterPopup(false))}>
            <CloseBtnSVG />
          </span>
          <label>
            {t("newEmail.sendTo")} <input type="text" />
          </label>
          <hr />
          <label>
            {t("newEmail.title")} <input type="text" />
          </label>
          <hr />
          <div>
            <AddFile />
            <hr />
          </div>
        </div>
        <div>
          <TextEditor />
        </div>
        <div>
          <button>{t("newEmail.send")}</button>
          <button onClick={() => dispatch(changeNewLetterPopup(false))}>
            {t("newEmail.cancel")}
          </button>
        </div>
      </div>
    </StyledCreateEmail>
  );
}

export default CreateEmail;
