import React from "react";
import { useTranslation } from "react-i18next";

import { useAppDispatch } from "@/store/hooks";
import { changeNewLetterPopup } from "@/store/utilsSlice";

import StyledNavbar from "../styles/styledNavbar/StyledNavbar";
import NavRoute from "./NavRoute";

import InboxSVG from "../styles/svgs/navbar/InboxSVG";
import ArchiveSVG from "../styles/svgs/navbar/ArchiveSVG";
import ImportantSVG from "../styles/svgs/navbar/ImportantSVG";
import SentSVG from "../styles/svgs/navbar/SentSVG";
import DraftsSVG from "../styles/svgs/navbar/DraftsSVG";
import SpamSVG from "../styles/svgs/navbar/SpamSVG";
import TrashSVG from "../styles/svgs/navbar/TrashSVG";
import PlusSVG from "../styles/svgs/PlusSVG";
import writeLetter from "@/assets/images/writeLetter.svg";

function Navbar(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <StyledNavbar>
      <button onClick={() => dispatch(changeNewLetterPopup(true))}>
        <img src={writeLetter} alt="write_icon" />
        <span>{t("navbar.writeLetter")}</span>
      </button>
      <ul>
        <NavRoute to="inbox" svgComponent={<InboxSVG />} name={t("navbar.inbox")} />
        <NavRoute to="important" svgComponent={<ImportantSVG />} name={t("navbar.important")} />
        <NavRoute to="sent" svgComponent={<SentSVG />} name={t("navbar.sent")} />
        <NavRoute to="drafts" svgComponent={<DraftsSVG />} name={t("navbar.drafts")} />
        <NavRoute to="archive" svgComponent={<ArchiveSVG />} name={t("navbar.archive")} />
        <NavRoute to="spam" svgComponent={<SpamSVG />} name={t("navbar.spam")} />
        <NavRoute to="trash" svgComponent={<TrashSVG />} name={t("navbar.trash")} />
        <hr />
        <NavRoute to="/" svgComponent={<PlusSVG />} name={t("navbar.newFolder")} />
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;
