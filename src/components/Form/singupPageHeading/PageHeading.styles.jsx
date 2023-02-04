import styled from "styled-components";

export const MainHeadingElelemt = styled.h1`
  font-weight: 700;
  font-size: clamp(1.5rem, 1.0429rem + 1.7009vw, 3rem);
  line-height: clamp(1.8125rem, 1.2601rem + 2.0553vw, 3.625rem);
  color: ${({ theme }) => theme.colors.black.primary};
`;

export const SubHeadingElement = styled.p`
  font-weight: 700;
  font-size: clamp(1.5rem, 1.3476rem + 0.567vw, 2rem);
  line-height: clamp(1.8125rem, 1.6411rem + 0.6378vw, 2.375rem);
  color: ${({ theme }) => theme.colors.grey};
`;
