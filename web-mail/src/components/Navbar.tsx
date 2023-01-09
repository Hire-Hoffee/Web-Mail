import React from "react";

import StyledNavbar from "./styles/StyledNavbar";
import NavRoute from "./NavRoute";

import InboxSVG from "./styles/svgs/InboxSVG";
import ArchiveSVG from "./styles/svgs/ArchiveSVG";
import ImportantSVG from "./styles/svgs/ImportantSVG";
import SentSVG from "./styles/svgs/SentSVG";
import DraftsSVG from "./styles/svgs/DraftsSVG";
import SpamSVG from "./styles/svgs/SpamSVG";
import TrashSVG from "./styles/svgs/TrashSVG";
import PlusSVG from "./styles/svgs/PlusSVG";
import writeLetter from "@/assets/images/writeLetter.svg";

function Navbar(): JSX.Element {
  return (
    <StyledNavbar>
      <button>
        <img src={writeLetter} alt="write_icon" />
        <span>Написать письмо</span>
      </button>
      <ul>
        <NavRoute to="inbox" svgComponent={<InboxSVG />} name="Входящие" />
        <NavRoute to="important" svgComponent={<ImportantSVG />} name="Важное" />
        <NavRoute to="sent" svgComponent={<SentSVG />} name="Отправленные" />
        <NavRoute to="drafts" svgComponent={<DraftsSVG />} name="Черновики" />
        <NavRoute to="archive" svgComponent={<ArchiveSVG />} name="Архив" />
        <NavRoute to="spam" svgComponent={<SpamSVG />} name="Спам" />
        <NavRoute to="trash" svgComponent={<TrashSVG />} name="Корзина" />
        <hr />
        <NavRoute to="/inbox" svgComponent={<PlusSVG />} name="Новая папка" />
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;
