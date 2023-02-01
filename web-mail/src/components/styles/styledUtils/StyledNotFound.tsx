import styled from "styled-components";
import FlexContainer from "../styledContainers/FlexContainer";

const StyledNotFound = styled(FlexContainer)`
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  h1 {
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
  }
`;

export default StyledNotFound;
