import styled from "styled-components";

const StyledEmailCart = styled.main`
  background-color: ${({ theme }) => theme.colors.header};
  height: 48px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 15px;
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
  grid-template-columns: 0.5fr 2.5fr 0.5fr 10fr 0.5fr 0.7fr;
  grid-template-rows: 1fr;
  grid-column-gap: 1px;
  grid-row-gap: 0px;
  align-items: center;
`;

export default StyledEmailCart;
