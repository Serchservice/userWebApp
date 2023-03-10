import { Button, ButtonWrapper } from "./SignupButton.styles";

const SignupButton = ({ children }) => {
  return (
    <ButtonWrapper>
      <Button>{children}</Button>
    </ButtonWrapper>
  );
};

export default SignupButton;
