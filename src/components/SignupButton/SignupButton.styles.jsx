import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
  padding: clamp(0.5625rem, 0.4292rem + 0.4961vw, 1rem)
    clamp(2.625rem, 1.7488rem + 3.2601vw, 5.5rem);
  background: #3b043b;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white.primary};
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
`;
