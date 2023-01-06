import styled from "styled-components";

const StyledEmailCart = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  position: relative;
  height: 48px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 15px;
  transition: 0.4s;

  div {
    min-width: 0;
  }

  div:nth-child(2) {
    img {
      width: 32px;
      height: 32px;
      border-radius: 100%;
    }
  }
  div:nth-child(4) {
    display: flex;
    justify-content: center;

    img:first-child {
      margin-right: -18px;
    }
    img:last-child {
      margin-left: -18px;
    }
  }

  div:nth-child(3),
  div:nth-child(5),
  div:nth-child(6),
  div:nth-child(8) {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div:nth-child(6) {
    color: #87898f;
  }

  div:nth-child(7) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:nth-child(8) {
    span {
      color: #87898f;
      font-size: 13px;
    }
  }

  .unread {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    grid-template-columns: 20px 36px 200px 40px 200px 4fr 40px 70px;
  }

  display: grid;
  grid-template-columns: 20px 36px 200px 40px 1.5fr 4fr 80px 70px;
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
