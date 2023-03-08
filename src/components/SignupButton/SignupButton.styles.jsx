import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
  padding: 16px 88px;
  background: #3b043b;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white.primary};
  font-weight: 700;
  font-size: clamp(1.125rem, 0.4526rem + 1.3449vw, 2rem);
  line-height: 39px;
  @media (max-width: 560px) {
    padding: 12.5px 86.5px;
    /* font-size: 18px; */
  }
`;
