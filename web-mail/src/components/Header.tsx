import React from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useTranslation } from "react-i18next";
import { changeFilterToggle } from "@/store/utilsSlice";

import StyledHeader from "./styles/StyledHeader";
import FilterComponent from "./FilterComponent";

import LogoSVG from "./styles/svgs/LogoSVG";
import LeftArrowSVG from "./styles/svgs/LeftArrowSVG";
import DownArrowSVG from "./styles/svgs/DownArrowSVG";
import StapleSVG from "./styles/svgs/StapleSVG";
import bookmarkIcon from "@/assets/images/bookmarkIcon.svg";
import importantIcon from "@/assets/images/importantIcon.svg";
import blueDot from "@/assets/images/blueDot.svg";

import themesDictionary from "@/utils/themes/themesDictionary";
import { chooseSVGFill } from "@/utils/functions/utilsFunctions";

import { setFilterSearchName } from "@/utils/functions/utilsFunctions";

function Header(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const theme = useAppSelector((state) => state.utils.theme);
  const navigate = useNavigate();
  const isToggledFilter = useAppSelector((state) => state.utils.toggleFilter);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const filterIconDict = {
    read: <img src={blueDot} alt="icon" />,
    bookmark: <img src={bookmarkIcon} alt="icon" />,
    important: <img src={importantIcon} alt="icon" />,
    doc: <StapleSVG svgFill={chooseSVGFill({ theme, dictionary: themesDictionary })} />,
  };
  const filterItemNameDict = {
    read: t("filter.unread"),
    bookmark: t("filter.flag"),
    important: t("filter.important"),
    doc: t("filter.files"),
  };

  return (
    <StyledHeader>
      {!searchParams.get("title") ? (
        <>
          <Link to={"/inbox"}>
            <LogoSVG />
          </Link>
          <div>
            {Object.keys(filterIconDict).map((item) => {
              return searchParams.get(item) ? (
                <span key={item}>{filterIconDict[item as keyof typeof filterIconDict]}</span>
              ) : (
                false
              );
            })}
            <div
              onClick={() => dispatch(changeFilterToggle(!isToggledFilter))}
              className={isToggledFilter ? "rotateArrow" : ""}
            >
              {setFilterSearchName({ searchParams, filterItemNameDict, t })}
              <DownArrowSVG />
            </div>
          </div>
          <FilterComponent />
        </>
      ) : (
        <em onClick={() => navigate(-1)}>
          <LeftArrowSVG />
          <p>Вернуться</p>
        </em>
      )}
    </StyledHeader>
  );
}

export default Header;
