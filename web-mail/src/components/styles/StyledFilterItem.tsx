import styled from "styled-components";
import ThemeType from "@/types/themeType";

const StyledFilterItem = styled.li<{ theme: ThemeType }>`
  padding: 10px 4px 10px 4px;
  padding-left: 15px;

  div {
    display: flex;
    align-items: center;
    p {
      margin-left: 8px;
    }
  }
`;

export default StyledFilterItem;
