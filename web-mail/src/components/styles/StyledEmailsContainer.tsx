import styled from "styled-components";

const StyledEmailsContainer = styled.main`
  background-color: ${({ theme }) => theme.container};
  position: relative;
  width: 100%;
  margin-left: 16px;
  border-radius: 12px;
  overflow: hidden;
`;

export default StyledEmailsContainer;
