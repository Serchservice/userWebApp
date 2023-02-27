import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 115rem;
  /* max-height: 1821px; */
  display: flex;
`;

export const FormContent = styled.div`
  width: 100%;
  margin-top: clamp(1.125rem, 0.5536rem + 2.1262vw, 3rem);
  padding-bottom: clamp(3.5rem, 2.9286rem + 2.1262vw, 5.375rem);
`;

export const Input = styled.input`
  flex: 1;
  font-weight: 300;
  font-size: clamp(1.25rem, 0.9833rem + 0.9922vw, 2.125rem);
  line-height: clamp(1.5rem, 1.1762rem + 1.2048vw, 2.5625rem);
  color: ${({ theme }) => theme.colors.black.secondary};
  width: 100%;
  height: 100%;
  font-family: "Inria Sans", sans-serif;
  &::placeholder {
    color: #b3b3b3;
    font-size: clamp(1.25rem, 0.9833rem + 0.9922vw, 2.125rem);
    font-family: "Inria Sans", sans-serif;
  }
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
