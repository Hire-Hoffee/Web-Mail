import styled from "styled-components";
import { ThemeType } from "./themes";
import StyledEmailsContainer from "./StyledEmailsContainer";

const StyledEmailPage = styled(StyledEmailsContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
  .user {
    height: 60px;
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
  }
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 100%;
  }
`;

export default StyledEmailPage;
