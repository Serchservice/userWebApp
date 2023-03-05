import { useForm } from "react-hook-form";

import FormHeading, {
  MainHeading,
  SubHeading,
} from "../../components/Form/FormHeader/FormHeading";
import SignupButton from "../../components/SignupButton/SignupButton";
import {
  ActivationGuide,
  ActivationInstruction,
  Right,
  RightContent,
  PinInputWrapper,
  PinResendOption,
  PinResetLink,
} from "./EmailVerification.styles";
import PinInput from "../../components/PinInput/PinInput";

const EmailVerifiaction = () => {
  return (
    <Right>
      <RightContent>
        <form>
          <FormHeading>
            <MainHeading>verify your email address</MainHeading>
            <SubHeading>
              We have sent you an email to the address you provided us when you
              created this Serch account
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
  );
};

export default EmailVerifiaction;
