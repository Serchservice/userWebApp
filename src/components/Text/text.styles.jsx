import styled from "styled-components";

export const TextElement = styled.span`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};
  display: block;
`;
