import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  width: 100%;
  padding: 62px 43px 44px 43px;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 59px;
  @media (max-width: 430px) {
    padding: 39px 15px 45px 15px;
    margin-top: 51px;
  }
`;

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
  color: #030001;
  line-height: 29px;
  margin-bottom: 5px;
  text-transform: capitalize;
  display: block;
  @media (max-width: 430px) {
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
    margin-bottom: 10px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid #3b043b;
  border-radius: 10px;
  width: 100%;
  height: 70px;
  padding-left: 20px;
  padding-right: 20px;

  &:focus-within {
    border-width: 3px;
  }

  @media (max-width: 430px) {
    height: 55px;
  }
`;

export const Input = styled.input`
  flex: 1;
  font-size: 24px;
  font-weight: 400;
  color: #b3b3b3;
  width: 100%;
  height: 100%;
  font-family: "Inria Sans", sans-serif;

  @media (max-width: 430px) {
    font-size: 18px;
  }
  &:focus {
    border-width: 3px;
  }
  &::placeholder {
    color: #b3b3b3;
    font-size: 24px;
    font-family: "Inria Sans", sans-serif;
    @media (max-width: 480px) {
      font-size: 18px;
      font-weight: 300;
    }
  }
`;

export const PasswordTogglerIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: 32px;
  z-index: 2;
`;

export const LoginOptionsWrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 73px;
  margin-top: 40px;
  @media (max-width: 480px) {
    margin-top: 27px;
    gap: 27px;
  }
`;

export const LoginOptions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-top: ${(props) => props.marginTop}; */
`;

export const CreateAccountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const LoginBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NewUserText = styled.span`
  font-size: 28px;
  line-height: 34px;
  color: rgba(124, 124, 124, 0.5);
  @media (max-width: 480px) {
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 24px;
  font-weight: 24px;
  line-height: 29px;
  color: ${({ color }) => color};
  @media (max-width: 480px) {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
  &:visited {
    color: ${({ color }) => color};
  }
`;

export const LoginButton = styled.button`
  width: 200px;
  height: 55px;
  font-size: 28px;
  line-height: 34px;
  color: #fff;
  background: #3f0f36;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  @media (max-width: 480px) {
    width: min(110px, 130px);
    height: 40px;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const ValidationMessage = styled.span`
  color: #ff0039;
  font-size: 24px;
  padding-left: 10px;
  margin-top: 5px;
  font-family: 300;
  @media (max-width: 430px) {
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
  }
`;

/*
import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
function App() {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} />}
      label="Check me"
    />
  );
}
*/
