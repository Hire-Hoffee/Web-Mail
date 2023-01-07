import React from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { changeFilterToggle } from "@/store/utilsSlice";

import StyledHeader from "./styles/StyledHeader";
import FilterComponent from "./FilterComponent";

import LogoSVG from "./styles/svgs/LogoSVG";
import LeftArrowSVG from "./styles/svgs/LeftArrowSVG";
import DownArrowSVG from "./styles/svgs/DownArrowSVG";

function Header(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const isToggledFilter = useAppSelector((state) => state.utils.toggleFilter);
  const dispatch = useAppDispatch();

  return (
    <StyledHeader>
      {!searchParams.get("title") ? (
        <>
          <Link to={"/inbox"}>
            <LogoSVG />
          </Link>
          <div
            onClick={() => {
              dispatch(changeFilterToggle(!isToggledFilter));
            }}
            className={isToggledFilter ? "rotateArrow" : ""}
          >
            <p>Фильтр</p>
            <DownArrowSVG />
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
