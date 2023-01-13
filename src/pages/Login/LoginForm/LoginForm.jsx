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
} from "./LoginForm.styles";
import Checkbox from "../../../components/checkbox/Checkbox";
import { EyeIconClose, EyeIconOpen } from "../EyeIcons/EyeIcons";
import Text from "../../../components/Text/Text";
import { useState } from "react";

const LoginForm = ({ register, handleSubmit, handler, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputType = showPassword ? "text" : "password";
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
            {...register("email", { required: "email is required" })}
          />
        </InputWrapper>
        <p>{errors.email?.message}</p>
      </FormField>
      <FormField>
        <Label htmlFor="password">password</Label>
        <InputWrapper>
          <Input
            type={passwordInputType}
            placeholder="***************"
            id="password"
            {...register("password", {
              required: "password is required",
              minLength: { value: 8, message: "minimum length is 8" },
            })}
          />
          <PasswordTogglerIcon
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeIconOpen /> : <EyeIconClose />}
          </PasswordTogglerIcon>
        </InputWrapper>
        <p>{errors.password?.message}</p>
        <p>{errors.password?.minLength}</p>
      </FormField>
      <LoginOptionsWrapper>
        <LoginOptions marginTop="40px">
          <Checkbox label="Remember me" />
          <StyledLink to="#" color="#3F0F36">
            Forgot password?
          </StyledLink>
        </LoginOptions>
        <LoginOptions>
          <CreateAccountWrapper>
            <Text
              fontSize="28px"
              line-height="34px"
              color="rgba(124, 124, 124, 0.5)"
            >
              New user?
            </Text>
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
