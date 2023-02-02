import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 115rem;
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: solid red 1px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.black.primary};
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: solid blue 1px;
`;
