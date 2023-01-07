import styled from "styled-components";

const StyledFilterItem = styled.li`
  padding: 10px 4px 10px 4px;
  padding-left: 30px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hoveredItem};
    border-radius: 12px;
    transition: 0.2s;
  }
  div {
    display: flex;
    align-items: center;
    p {
      margin-left: 8px;
    }
    div:last-child {
      position: absolute;
      left: 4px;
    }
  }
`;

export default StyledFilterItem;
