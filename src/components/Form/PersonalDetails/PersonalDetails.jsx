import FormHeading, {
  MainHeading,
  SubHeading,
} from "../FormHeader/FormHeading";
import { FormContent, Button, ButtonWrapper } from "./PersonalDetails.styles";
import FormField from "../FormField/FormField";
import { Input } from "../FormField/FormField.styles";
import PasswordToggler from "../../PassWordToggler/PassowrdToggler";
import { useState } from "react";

const PersonalDetails = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <FormHeading>
        <MainHeading>Create your Serch account</MainHeading>
        <SubHeading>Your personal details</SubHeading>
      </FormHeading>
      <FormContent>
        <FormField id="firstName" fieldName="first Name">
          <Input type="text" id="firstName" placeholder="John" />
        </FormField>
        <FormField id="lastName" fieldName="last Name">
          <Input type="text" id="lastName" placeholder="Doe" />
        </FormField>
        <FormField id="email" fieldName="email address">
          <Input type="email" id="email" placeholder="johndoe@gmail.com" />
        </FormField>
        <FormField id="phone" fieldName="phone number">
          <Input type="tel" id="phone" placeholder="9849089837" />
        </FormField>
        <FormField id="gender" fieldName="gender">
          <Input type="tel" id="phone" placeholder="Male" />
        </FormField>
        <FormField id="password" fieldName="password">
          <Input
            type={isToggled ? "text" : "password"}
            id="password"
            placeholder="********"
          />
          <PasswordToggler isToggled={isToggled} setIsToggled={setIsToggled} />
        </FormField>
        <FormField id="confirmPassword" fieldName="confirn Password">
          <Input
            type={isToggled ? "text" : "password"}
            id="confrimPassword"
            placeholder="confirm your strong password"
          />
          <PasswordToggler isToggled={isToggled} setIsToggled={setIsToggled} />
        </FormField>
      </FormContent>
      <ButtonWrapper>
        <Button type="button">Continue</Button>
      </ButtonWrapper>
    </>
  );
};

export default PersonalDetails;
