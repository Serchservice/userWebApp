import styled from "styled-components";

export const TextElement = styled.span`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "24px")};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "29px")};
  display: block;
`;
