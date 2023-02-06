import styled from "styled-components";
import {
  FormField,
  InputWrapper,
} from "../../../pages/Login/LoginForm/LoginForm.styles";

export const FieldWrapper = styled(FormField)`
  margin-bottom: clamp(0.9375rem, 0.4423rem + 1.8427vw, 2.5625rem);
`;

export const Label = styled.label`
  font-weight: 300;
  font-size: clamp(1.125rem, 0.8583rem + 0.9922vw, 2rem);
  font-size: clamp(1.375rem, 1.6417rem + -0.9922vw, 0.5rem);
  color: ${({ theme }) => theme.colors.black.secondary};
  margin-bottom: 12px;
  text-transform: capitalize;
  display: block;
`;

export const InputFieldWrapper = styled(InputWrapper)`
  height: clamp(3.4375rem, 2.7709rem + 2.4805vw, 5.625rem);
  padding-left: clamp(20px, 1.0786rem + 0.6378vw, 29px);
  padding-right: clamp(20px, 1.0786rem + 0.6378vw, 29px);
  align-items: center;
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
