import styled from "styled-components";

export const PinInput = styled.input`
  flex: 1;
  width: 100%;
  /* width: clamp(50px, 6vw, 100px); */
  max-width: 100px;
  min-width: 45px;
  height: clamp(8vh, 8vh, 10vh);
  height: 10vh;
  max-height: 70px;
  border: 2px solid #3b043b;
  border-radius: 10px;
  display: flex;
  text-align: center;
  font-size: 24px;
`;
