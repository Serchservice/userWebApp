import { useForm } from "react-hook-form";
import Footer from "../../components/Footer/Footer";
import FormHeading, {
  MainHeading,
  SubHeading,
} from "../../components/Form/FormHeader/FormHeading";
import SignupButton from "../../components/SignupButton/SignupButton";
import {
  // ActivationGuide,
  // ActivationInstruction,
  Right,
  RightContent,
  PinInputWrapper,
  PinResendOption,
  PinResetLink,
  HeaderText,
  Fieldset,
} from "./EmailVerification.styles";
import PinInput from "../../components/PinInput/PinInput";

const EmailVerifiaction = () => {
  return (
    <Right>
      <RightContent>
        <form>
          <FormHeading>
            <MainHeading>verify your email address</MainHeading>
            <p>
              We have sent you an email to the address you provided us when you
              created this Serch account
            </p>
          </FormHeading>
          <span className="pinOptions">
            Either use the link in the provided email address or get the pin
            sent to you
          </span>
          <Fieldset>
            <legend>Enter your six-digit pin</legend>
            <PinInputWrapper className="cc-inputs">
              <PinInput />
              <PinInput />
              <PinInput />
              <PinInput />
              <PinInput />
            </PinInputWrapper>
          </Fieldset>
          <PinResendOption>
            <span className="resendText">Didn't get an email?</span>{" "}
            <PinResetLink>Resend email</PinResetLink>
          </PinResendOption>
          <SignupButton>Verify</SignupButton>
        </form>
      </RightContent>
      <div className="footerWrapper">
        <Footer page="login" />
      </div>
    </Right>
  );
};

export default EmailVerifiaction;
