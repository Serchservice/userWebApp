import styled from "styled-components";
export const PlaceholderWrapper = styled.article`
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 38px 151px;
  max-width: 1710px;

  /* flex-wrap: wrap; */
  padding: ${({ padding }) => padding || "151px"} 60px 0;
`;

export const PlaceholderItem = styled.span`
  display: inline-block;
  background: #efefef;
  border-radius: 20px;
  /* width: 100%; */
  /* width: 720px; */
  /* flex: 1; */

  max-width: 720px;
  height: 130px;
`;
