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
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
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
`;

export const Input = styled.input`
  flex: 1;
  font-size: 24px;
  font-weight: 400;
  color: #b3b3b3;
  width: 100%;
  height: inherit;
  font-family: "Inria Sans", sans-serif;
  &:focus {
    border-width: 3px;
  }
  &::placeholder {
    color: #b3b3b3;
    font-size: 24px;
    font-family: "Inria Sans", sans-serif;
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
  gap: 15px;
`;

export const LoginBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledLink = styled(Link)`
  font-size: 24px;
  font-weight: 24px;
  line-height: 29px;
  color: ${({ color }) => color};
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
