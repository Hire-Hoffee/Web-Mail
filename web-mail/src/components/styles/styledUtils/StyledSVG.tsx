import styled from "styled-components";

const StyledSVG = styled.div`
  svg {
    path {
      fill: ${({ theme }) => theme.text.global};
    }
  }
`;

export default StyledSVG;
