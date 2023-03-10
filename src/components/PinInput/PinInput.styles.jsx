import styled from "styled-components";

export const PinInput = styled.input`
  flex: 1;
  width: clamp(3.125rem, 0.7235rem + 4.8031vw, 6.25rem);
  max-width: 100px;
  height: clamp(8vh, 8vh, 10vh);
  height: clamp(3.125rem, 2.1644rem + 1.9212vw, 4.375rem);
  border: 2px solid #3b043b;
  border-radius: 10px;
  display: flex;
  text-align: center;
  font-size: 24px;
  @media (max-width: 800px) {
    max-width: 80px;
  }
`;
