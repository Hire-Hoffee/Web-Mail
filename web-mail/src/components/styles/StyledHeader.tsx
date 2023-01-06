import styled from "styled-components";
import ThemeType from "@/types/themeType";

const StyledHeader = styled.header<{ theme: ThemeType }>`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.header};

  div {
    transition: 0.2s;
    justify-content: space-between;
    div {
      user-select: none;
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-right: 12px;
      margin-left: 8px;
    }
  }

  .rotateArrow {
    div {
      transform: rotate(180deg);
      transition: 0.2s;
    }
  }

  .showFilter {
    animation-name: showFilter;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }

  .hideFilter {
    visibility: hidden;
    animation-name: hideFilter;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }

  @keyframes showFilter {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes hideFilter {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export default StyledHeader;
