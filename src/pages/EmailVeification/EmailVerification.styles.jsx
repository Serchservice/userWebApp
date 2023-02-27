import styled from "styled-components";

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: solid blue 1px;
  padding-bottom: 86px;
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 49px; */
  padding-right: clamp(1.1875rem, 0.178rem + 3.7562vw, 4.5rem);
  padding-left: clamp(1.3125rem, 0.1506rem + 4.3232vw, 5.125rem);
`;
