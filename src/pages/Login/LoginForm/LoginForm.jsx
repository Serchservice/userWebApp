import {
  Form,
  FormField,
  Input,
  InputWrapper,
  Label,
  PasswordTogglerIcon,
} from "./LoginForm.styles";
import Checkbox from "../../../components/checkbox/Checkbox";
import { EyeIconClose } from "../EyeIcons/EyeIcons";

const LoginForm = () => {
  return (
    <Form>
      <FormField>
        <Label>email address</Label>
        <InputWrapper>
          <Input type="email" placeholder="joe@gmail.com" />
        </InputWrapper>
      </FormField>
      <FormField>
        <Label>password</Label>
        <InputWrapper>
          <Input type="password" placeholder="***************" />
          <PasswordTogglerIcon>
            <EyeIconClose />
          </PasswordTogglerIcon>
        </InputWrapper>
        <Checkbox label="Remember me" />
      </FormField>
    </Form>
  );
};

export default LoginForm;
