import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 115rem;
  /* max-height: 1821px; */
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  /* display: flex; */
  /* flex-direction: column; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 71.8px 1fr 24px;
  border: solid red 1px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.black.primary};
  padding-bottom: 49px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: solid blue 1px;
  padding-bottom: 86px;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  /* height: 71.86px; */
  /* border: solid red 1px; */
  padding-top: 21px;
  padding-left: 17px;
  img {
    height: clamp(2.8125rem, 2.7009rem + 0.4153vw, 3.17875rem);
    width: clamp(2.8125rem, 2.662rem + 0.5599vw, 3.30625rem);
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: clamp(1.5rem, 0.2239rem + 4.7484vw, 5.6875rem);
  padding-right: clamp(1.875rem, -0.144rem + 7.5124vw, 8.5rem);
  padding-top: 245px;
  /* margin-bottom: 49px; */
`;

export const AccountOption = styled.div`
  flex: 0 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(24px, 3vw, 81px);
  margin-bottom: 118px;
  p {
    font-weight: 700;
    font-size: clamp(0.875rem, 0.4356rem + 0.9251vw, 1.5rem);
    line-height: 29px;
    color: ${({ theme }) => theme.colors.white.primary};
  }

  span {
    font-weight: 700;
    font-size: clamp(1rem, 0.2969rem + 1.4801vw, 2rem);
    line-height: 38px;
    text-decoration-line: underline;
    /* text-decoration: underline; */
    color: ${({ theme }) => theme.colors.purple.regular};
  }
`;

export const HeaderWrapper = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: flex;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 49px; */
  padding-right: clamp(1.1875rem, 0.178rem + 3.7562vw, 4.5rem);
  padding-left: clamp(1.3125rem, 0.1506rem + 4.3232vw, 5.125rem);
`;
