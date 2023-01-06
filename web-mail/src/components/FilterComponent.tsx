import React from "react";
import StyledFilter from "./styles/StyledFilter";
import { useAppSelector } from "@/store/hooks";
import FilterItem from "./FilterItem";

import bookmarkIcon from "@/assets/images/bookmarkIcon.svg";
import importantIcon from "@/assets/images/importantIcon.svg";
import blueDot from "@/assets/images/blueDot.svg";
import StapleSVG from "./styles/svgs/StapleSVG";
import CheckSVG from "./styles/svgs/CheckSVG";

function FilterComponent() {
  const isToggledFilter = useAppSelector((state) => state.utils.toggleFilter);

  return (
    <StyledFilter className={isToggledFilter ? "showFilter" : "hideFilter"}>
      <ul>
        <li>
          <CheckSVG />
          <p>Все письма</p>
        </li>
        <FilterItem name="Непрочитанные" svg={blueDot} />
        <FilterItem name="С флажком" svg={bookmarkIcon} />
        <FilterItem name="Важные" svg={importantIcon} />
        <FilterItem name="С вложениями" svgComponent={<StapleSVG />} />
      </ul>
    </StyledFilter>
  );
}

export default FilterComponent;
