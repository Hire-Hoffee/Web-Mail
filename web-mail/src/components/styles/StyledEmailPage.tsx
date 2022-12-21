import styled from "styled-components";
import StyledEmailsContainer from "./StyledEmailsContainer";

const StyledEmailPage = styled(StyledEmailsContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  padding-left: 32px;
  padding-right: 32px;
  position: relative;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    h1 {
      font-size: 24px;
      font-weight: bold;
    }
    div {
      font-size: 13px;
      display: flex;
      align-items: center;
    }
  }
  .user {
    margin-bottom: 8px;
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;
    img {
      margin-right: 12px;
    }
  }
  .user__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .user__info__name {
      font-size: 15px;
    }
    .user__info__date {
      font-size: 13px;
      img {
        position: absolute;
        top: -2px;
      }
    }
    .emailTo {
      font-size: 13px;
      color: #87898f;
      margin-top: 5px;
    }
  }
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 100%;
  }
  .email_text {
    padding-top: 16px;
    padding-bottom: 16px;
    p {
      line-height: 1.5rem;
      font-size: 15px;
    }
  }
  .bigIMG {
    width: 256px;
    height: 190px;
    border-radius: 12px;
  }
  .downloadIMG {
    margin-top: 8px;
    margin-bottom: 8px;
    a {
      color: #005bd1;
    }
    a:hover {
      opacity: 0.8;
    }
  }
`;

export default StyledEmailPage;
