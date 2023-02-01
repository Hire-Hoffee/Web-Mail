import React from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import StyledFilterItem from "../styles/styledHeader/StyledFilterItem";
import { FilterItemProp } from "@/types/otherTypes";
import CheckSVG from "../styles/svgs/CheckSVG";

import { changeSearchParams } from "@/utils/functions/utilsFunctions";

function FilterItem({ name, svg, svgComponent, query }: FilterItemProp): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();

  return (
    <StyledFilterItem
      onClick={() => changeSearchParams({ value: query, setParams: setSearchParams })}
    >
      <div>
        {svg ? <img src={svg} alt="icon" /> : svgComponent}
        <p>{name}</p>
        {searchParams.get(query[0]) === query[1] ||
        (String(searchParams) === "" && name === t("filter.allLetters")) ? (
          <CheckSVG />
        ) : (
          false
        )}
      </div>
    </StyledFilterItem>
  );
}

export default FilterItem;
