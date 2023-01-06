import React from "react";
import StyledFilter from "./styles/StyledFilter";
import { useAppSelector } from "@/store/hooks";

function FilterComponent() {
  const isToggledFilter = useAppSelector((state) => state.utils.toggleFilter);

  return (
    <StyledFilter className={isToggledFilter ? "showFilter" : "hideFilter"}>
      <p>FilterComponent</p>
    </StyledFilter>
  );
}

export default FilterComponent;
