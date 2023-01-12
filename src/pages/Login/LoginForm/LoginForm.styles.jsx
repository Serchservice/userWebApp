import styled from "styled-components";

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
  width: 60px;
`;

export const PasswordConfig = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
