import React from "react";
import { useSearchParams } from "react-router-dom";

import StyledFilterItem from "./styles/StyledFilterItem";
import { FilterItemProp } from "@/types/otherTypes";
import CheckSVG from "./styles/svgs/CheckSVG";

import { changeSearchParams } from "@/utils/functions/utilsFunctions";

function FilterItem({ name, svg, svgComponent, query }: FilterItemProp): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <StyledFilterItem
      onClick={() => changeSearchParams({ value: query, setParams: setSearchParams })}
    >
      <div>
        {svg ? <img src={svg} alt="icon" /> : svgComponent}
        <p>{name}</p>
        {searchParams.get(query[0]) === query[1] ||
        (String(searchParams) === "" && name === "Все письма") ? (
          <CheckSVG />
        ) : (
          false
        )}
      </div>
    </StyledFilterItem>
  );
}

export default FilterItem;
