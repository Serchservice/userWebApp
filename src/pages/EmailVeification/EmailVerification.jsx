import { useForm } from "react-hook-form";

import FormHeading, {
  MainHeading,
  SubHeading,
} from "../../components/Form/FormHeader/FormHeading";
import SignupButton from "../../components/SignupButton/SignupButton";
import SignupLeft from "../../components/SignupLeft/SignupLeft";
import {
  ActivationGuide,
  ActivationInstruction,
  Container,
  Right,
  RightContent,
  PinInputWrapper,
  PinResendOption,
  PinResetLink,
} from "./EmailVerification.styles";
import PinInput from "../../components/PinInput/PinInput";

const steps = [
  {
    step: 1,
    title: "Your personal details",
    description: "please provide us with your email and other information.",
    path: "signup/personal_details",
  },
  {
    step: 2,
    title: "verify your email",
    description:
      "We will send you a verification link and OTP to verifiy the email you provide to Serch",
    path: "signup/verify_email",
  },
  {
    step: 3,
    title: "You're in!",
    description:
      "We will automatically redirect you to the homepage or you can sign in to get to the homepage",
  },
];

const EmailVerifiaction = () => {
  return (
    <Container>
      <SignupLeft steps={steps} />
      <Right>
        <RightContent>
          <form>
            <FormHeading>
              <MainHeading>verify your email address</MainHeading>
              <SubHeading>
                We have sent you an email to the address you provided us when
                you created this Serch account
              </SubHeading>
            </FormHeading>
            <ActivationGuide>
              Either use the link in the provided email address or get the pin
              sent to you
            </ActivationGuide>
            <ActivationInstruction>
              Enter your six-digit pin
            </ActivationInstruction>
            <PinInputWrapper className="cc-inputs">
              <PinInput />
              <PinInput />
              <PinInput />
              <PinInput />
              <PinInput />
            </PinInputWrapper>
            <PinResendOption>
              Didn't get an email? <PinResetLink>Resend email</PinResetLink>
            </PinResendOption>
            <SignupButton>Finish</SignupButton>
          </form>
        </RightContent>
      </Right>
    </Container>
  );
};

export default EmailVerifiaction;
