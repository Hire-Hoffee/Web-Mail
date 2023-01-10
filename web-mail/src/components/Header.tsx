import React from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
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

function Header(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const theme = useAppSelector((state) => state.utils.theme);
  const navigate = useNavigate();
  const isToggledFilter = useAppSelector((state) => state.utils.toggleFilter);
  const dispatch = useAppDispatch();

  const filterIconDict = {
    read: <img src={blueDot} alt="icon" />,
    bookmark: <img src={bookmarkIcon} alt="icon" />,
    important: <img src={importantIcon} alt="icon" />,
    doc: <StapleSVG svgFill={chooseSVGFill({ theme, dictionary: themesDictionary })} />,
  };
  const filterItemNameDict = {
    read: "Непрочитанные",
    bookmark: "С флажком",
    important: "Важные",
    doc: "С вложениями",
  };

  function setFilterSearchName(): JSX.Element {
    const params: string[][] = [];
    for (let entry of searchParams.entries()) {
      params.push(entry);
    }
    if (params.length === 1 && params[0][0] in filterItemNameDict) {
      return <p>{filterItemNameDict[params[0][0] as keyof typeof filterItemNameDict]}</p>;
    }
    if ((params.length === 1 && params[0][1] === "all") || params.length === 0) {
      return <p>Фильтр</p>;
    }
    return <p>Фильтры</p>;
  }

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
              {setFilterSearchName()}
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
