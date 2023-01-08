import React from "react";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";

import StyledFilter from "./styles/StyledFilter";
import FilterItem from "./FilterItem";

import bookmarkIcon from "@/assets/images/bookmarkIcon.svg";
import importantIcon from "@/assets/images/importantIcon.svg";
import blueDot from "@/assets/images/blueDot.svg";
import StapleSVG from "./styles/svgs/StapleSVG";

function FilterComponent() {
  const isToggledFilter = useAppSelector((state) => state.utils.toggleFilter);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <StyledFilter className={isToggledFilter ? "showFilter" : "hideFilter"}>
      <ul>
        <FilterItem name="Все письма" query={["letters", "all"]} />
        <FilterItem name="Непрочитанные" svg={blueDot} query={["read", "false"]} />
        <FilterItem name="С флажком" svg={bookmarkIcon} query={["bookmark", "true"]} />
        <FilterItem name="Важные" svg={importantIcon} query={["important", "true"]} />
        <FilterItem name="С вложениями" svgComponent={<StapleSVG />} query={["doc", "true"]} />
        {!searchParams.get("letters") ? (
          <div>
            <hr />
            <FilterItem name="Сбросить всё" query={["reset", "all"]} />
          </div>
        ) : (
          false
        )}
      </ul>
    </StyledFilter>
  );
}

export default FilterComponent;
