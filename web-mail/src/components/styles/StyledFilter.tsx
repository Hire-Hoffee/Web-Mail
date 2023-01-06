import styled from "styled-components";
import ThemeType from "@/types/themeType";

const StyledFilter = styled.div<{ theme: ThemeType }>`
  z-index: 9999;
  width: 240px;
  background-color: ${({ theme }) => theme.colors.header};
  box-shadow: 0px 4px 32px rgba(0, 16, 61, 0.16);
  border-radius: 12px;
  position: absolute;
  right: 12px;
  top: 50px;
  transition: 0.2s;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 15px;

  li {
    cursor: pointer;
  }

  li:hover {
    background-color: ${({ theme }) => theme.colors.selected};
    border-radius: 12px;
    transition: 0.2s;
  }

  ul li:nth-child(1) {
    display: flex;
    align-items: center;
    padding: 10px 4px 10px 4px;
    p {
      margin-left: 4px;
    }
  }
`;

export default StyledFilter;
