import styled from "styled-components";

const StyledEmailsContainer = styled.main`
  background-color: ${({ theme }) => theme.container};
  position: relative;
  width: 100%;
  height: calc(100vh - 82px);
  margin-left: 16px;
  border-radius: 12px;
  overflow: hidden;
  overflow-y: auto;
  color: ${({ theme }) => theme.text.primary};
`;

export default StyledEmailsContainer;
