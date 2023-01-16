import {
  CreateAccountWrapper,
  Form,
  FormField,
  Input,
  InputWrapper,
  Label,
  LoginOptionsWrapper,
  LoginOptions,
  PasswordTogglerIcon,
  StyledLink,
  LoginButton,
  ValidationMessage,
  NewUserText,
} from "./LoginForm.styles";
import Checkbox from "../../../components/checkbox/Checkbox";
import { EyeIconClose, EyeIconOpen } from "../EyeIcons/EyeIcons";
import { useState } from "react";

const LoginForm = ({ register, handleSubmit, handler, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputType = showPassword ? "text" : "password";
  const emailRegex =
    /^([a-z0-9-_\.]+)@([a-z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  const passWordValidation = {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password length: 8 or more characters",
    },
  };
  const emailValidation = {
    required: "Email is required",
    pattern: {
      value: emailRegex,
      message: "Email is not valid",
    },
  };
  const EyeIcon = showPassword ? <EyeIconOpen /> : <EyeIconClose />;
  return (
    <Form onSubmit={handleSubmit(handler)}>
      <FormField>
        <Label htmlFor="email">email address</Label>
        <InputWrapper>
          <Input
            type="email"
            placeholder="joe@gmail.com"
            id="email"
            autoComplete="off"
            {...register("email", emailValidation)}
          />
        </InputWrapper>
        <ValidationMessage>{errors.email?.message}</ValidationMessage>
        <ValidationMessage>{errors.email?.pattern}</ValidationMessage>
      </FormField>
      <FormField>
        <Label htmlFor="password">password</Label>
        <InputWrapper>
          <Input
            type={passwordInputType}
            placeholder="***************"
            id="password"
            {...register("password", passWordValidation)}
          />
          <PasswordTogglerIcon
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {EyeIcon}
          </PasswordTogglerIcon>
        </InputWrapper>
        <ValidationMessage>{errors.password?.message}</ValidationMessage>
        <ValidationMessage>{errors.password?.minLength}</ValidationMessage>
      </FormField>
      <LoginOptionsWrapper>
        <LoginOptions>
          <Checkbox label="Remember me" />
          <StyledLink to="#" color="#3F0F36">
            Forgot password?
          </StyledLink>
        </LoginOptions>
        <LoginOptions>
          <CreateAccountWrapper>
            <NewUserText>New user?</NewUserText>
            <StyledLink to="#" color="#6C0062">
              Create Account
            </StyledLink>
          </CreateAccountWrapper>
          <LoginButton type="submit">Login</LoginButton>
        </LoginOptions>
      </LoginOptionsWrapper>
    </Form>
  );
};

export default LoginForm;
