import styled from "styled-components";

const StyledEmailCart = styled.main`
  background-color: ${({ theme }) => theme.colors.header};
  position: relative;
  height: 48px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 15px;
  transition: 0.4s;
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 100%;
  }
  .textLighter {
    color: #87898f;
  }
  .fontSmall {
    font-size: 13px;
  }
  .unread {
    font-weight: bold;
  }
  display: grid;
  grid-template-columns: 20px 40px 200px 40px 1fr 40px 60px;
  grid-template-rows: 1fr;
  grid-column-gap: 1px;
  grid-row-gap: 0px;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.selected};
    transition: 0.4s;
    border-radius: 12px;
    cursor: pointer;
  }
  hr {
    position: absolute;
    height: 1px;
    border: none;
    width: 95%;
    right: 5px;
    background-color: ${({ theme }) => theme.colors.selected};
    bottom: 0;
    margin: auto;
  }
`;

export default StyledEmailCart;
