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

export const LogoWrapper = styled.div`
  width: 100%;
  height: 71.86px;
  /* border: solid red 1px; */
  padding-top: 21px;
  padding-left: 17px;
  img {
    height: 50.86px;
    width: 52.9px;
  }
`;
