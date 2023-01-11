import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 943px;
  margin: 0 auto;
  border: solid red 2px;
`;

export const WelcomeMessage = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 108px;
`;
