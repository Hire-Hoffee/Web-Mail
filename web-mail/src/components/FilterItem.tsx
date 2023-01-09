import React from "react";
import { useSearchParams } from "react-router-dom";

import StyledFilterItem from "./styles/StyledFilterItem";
import { FilterItemProp } from "@/types/otherTypes";
import CheckSVG from "./styles/svgs/CheckSVG";

function FilterItem({ name, svg, svgComponent, query }: FilterItemProp): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  function changeSearchParams(value: [string, string]) {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    if (params.get(value[0]) === value[1]) {
      params.delete(value[0]);
      return setSearchParams(params.toString());
    }
    params.append(...value);
    if (params.get(value[0]) !== "all") {
      params.delete("letters");
      return setSearchParams(params.toString());
    }
    if (value[0] === "reset") {
      return setSearchParams();
    }
    return setSearchParams(params.toString());
  }

  return (
    <StyledFilterItem onClick={() => changeSearchParams(query)}>
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
