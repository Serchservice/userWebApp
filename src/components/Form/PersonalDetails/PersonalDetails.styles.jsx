import styled from "styled-components";

export const FormContent = styled.div`
  width: 100%;
  margin-top: clamp(1.125rem, 0.5536rem + 2.1262vw, 3rem);
  padding-bottom: clamp(3.5rem, 2.9286rem + 2.1262vw, 5.375rem);
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: clamp(5.25rem, 4.1072rem + 4.2523vw, 9rem);
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
