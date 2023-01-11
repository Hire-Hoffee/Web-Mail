import styled from "styled-components";

const StyledEmailCart = styled.div`
  background-color: ${({ theme }) => theme.container};
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
  div:nth-child(3) {
    margin-left: 5px;
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
    color: ${({ theme }) => theme.text.secondary};
  }

  div:nth-child(7) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    padding-right: 100px;
    background-color: ${({ theme }) => theme.container};
    z-index: 999;
    transition: 0.4s;
    span:first-child {
      padding-left: 16px;
    }
    span:last-child {
      padding-left: 10px;
    }
  }

  div:nth-child(8) {
    position: absolute;
    background-color: ${({ theme }) => theme.container};
    width: max-content !important;
    right: 0;
    padding-right: 12px;
    padding-left: 16px;
    z-index: 999;
    transition: 0.4s;
    span {
      color: ${({ theme }) => theme.text.secondary};
      font-size: 13px;
    }
  }

  .unread {
    font-weight: bold;
  }

  display: grid;
  grid-template-columns: 20px 36px 200px 40px max-content 1fr 50px 70px;
  grid-template-rows: 1fr;
  grid-column-gap: 1px;
  grid-row-gap: 0px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 20px 36px 200px 40px max-content 1fr 50px 70px;
  }

  &:hover {
    div:nth-child(7),
    div:nth-child(8) {
      background-color: ${({ theme }) => theme.hoveredItem};
      transition: 0.4s;
    }
    background-color: ${({ theme }) => theme.hoveredItem};
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
    background-color: ${({ theme }) => theme.hr};
    bottom: 0;
    margin: auto;
  }
`;

export default StyledEmailCart;
