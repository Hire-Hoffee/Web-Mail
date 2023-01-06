import React from "react";
import StyledFilterItem from "./styles/StyledFilterItem";
import { FilterItemProp } from "@/types/otherTypes";

function FilterItem({ name, svg, svgComponent }: FilterItemProp) {
  return (
    <StyledFilterItem>
      <div>
        {svg ? <img src={svg} alt="icon" /> : svgComponent}
        <p>{name}</p>
      </div>
    </StyledFilterItem>
  );
}

export default FilterItem;
