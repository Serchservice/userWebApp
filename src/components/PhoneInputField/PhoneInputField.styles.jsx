import styled from "styled-components";

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 430px) {
    /* margin-bottom: 27px; */
  }
`;

export const Label = styled.label`
  width: 100%;
  font-weight: 400;
  font-size: 24px;
  font-size: clamp(18px, 0.965rem + 0.59vw, 24px);
  color: #030001;
  line-height: 29px;
  margin-bottom: 5px;
  text-transform: capitalize;
  display: block;
  @media (max-width: 430px) {
    /* font-size: 18px; */
    font-weight: 300;
    line-height: 22px;
    margin-bottom: 10px;
  }
`;
export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid #3b043b;
  border-radius: 10px;
  width: 100%;
  height: 70px;
  height: clamp(55px, 10vw, 70px);
  /* padding-left: 20px; */
  padding-right: clamp(0.625rem, 1.2vw, 1.25rem);
  /* padding-bottom: 5px; */

  &:focus-within {
    border-width: 3px;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  width: clamp(7.0625rem, 2.8838rem + 8.3573vw, 12.5rem);
  height: 100%;
  /* height: clamp(3.1875rem, 1.5545rem + 3.2661vw, 5.3125rem); */
  padding-left: clamp(0.5rem, 1.5vw, 1.125rem);
  background: #fdfdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 0px 0px 10px;
  /* border: solid red 1px; */
`;
export const InputWrapper = styled.div`
  flex: 1;
  padding-left: clamp(0.8125rem, 1.6vw, 2.25rem);
  input {
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
  }
`;

export const ValidationMessage = styled.span`
  color: #ff0039;
  font-size: clamp(1rem, 0.6158rem + 0.7685vw, 1.5rem);
  padding-left: 10px;
  margin-top: 5px;
  font-family: 300;
  line-height: 22px;
`;
