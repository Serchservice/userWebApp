import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-top: clamp(1.375rem, -0.9678rem + 8.7172vw, 9.0625rem);
  @media (max-width: 800px) {
    align-items: center;
  }
`;
