import React from "react";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import { useTranslation } from "react-i18next";

import StyledFilter from "../styles/styledHeader/StyledFilter";
import FilterItem from "./FilterItem";

import bookmarkIcon from "@/assets/images/bookmarkIcon.svg";
import importantIcon from "@/assets/images/importantIcon.svg";
import blueDot from "@/assets/images/blueDot.svg";
import StapleSVG from "../styles/svgs/StapleSVG";

import themesDictionary from "@/utils/themes/themesDictionary";
import { chooseSVGFill } from "@/utils/functions/utilsFunctions";

function FilterComponent(): JSX.Element {
  const isToggledFilter = useAppSelector((state) => state.utils.toggleFilter);
  const theme = useAppSelector((state) => state.utils.theme);
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();

  return (
    <StyledFilter className={isToggledFilter ? "showFilter" : "hideFilter"}>
      <ul>
        <FilterItem name={t("filter.allLetters")} query={["letters", "all"]} />
        <FilterItem name={t("filter.unread")} svg={blueDot} query={["read", "false"]} />
        <FilterItem name={t("filter.flag")} svg={bookmarkIcon} query={["bookmark", "true"]} />
        <FilterItem
          name={t("filter.important")}
          svg={importantIcon}
          query={["important", "true"]}
        />
        <FilterItem
          name={t("filter.files")}
          svgComponent={
            <StapleSVG svgFill={chooseSVGFill({ theme, dictionary: themesDictionary })} />
          }
          query={["doc", "true"]}
        />
        {!(searchParams.get("letters") || String(searchParams) === "") ? (
          <div>
            <hr />
            <FilterItem name={t("filter.reset")} query={["reset", "all"]} />
          </div>
        ) : (
          false
        )}
      </ul>
    </StyledFilter>
  );
}

export default FilterComponent;
