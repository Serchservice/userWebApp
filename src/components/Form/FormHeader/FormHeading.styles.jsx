import styled from "styled-components";

export const HeadingWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-top: clamp(1.375rem, -0.9678rem + 8.7172vw, 9.0625rem);
  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const MainHeadingElelemt = styled.h1`
  font-weight: 700;
  font-size: clamp(1.5rem, 0.3473rem + 2.3055vw, 3rem);
  line-height: clamp(1.8125rem, 4vw, 3.625rem);
  color: ${({ theme }) => theme.colors.black.primary};
`;

export const SubHeadingElement = styled.p`
  font-weight: 700;
  font-size: clamp(1.5rem, 1.3476rem + 0.567vw, 2rem);
  line-height: clamp(1.8125rem, 1.6411rem + 0.6378vw, 2.375rem);
  color: ${({ theme }) => theme.colors.grey};
`;
