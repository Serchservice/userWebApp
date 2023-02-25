import { useForm } from "react-hook-form";

import FormHeading, {
  MainHeading,
  SubHeading,
} from "../FormHeader/FormHeading";
import { FormContent, Button, ButtonWrapper } from "./PersonalDetails.styles";
import FormField from "../FormField/FormField";
import { Input } from "./PersonalDetails.styles";
import PasswordToggler from "../../PassWordToggler/PassowrdToggler";
import { useState } from "react";

const PersonalDetailsForm = () => {
  const [isToggled, setIsToggled] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormHeading>
        <MainHeading>Create your Serch account</MainHeading>
        <SubHeading>Your personal details</SubHeading>
      </FormHeading>
      <FormContent>
        <FormField id="firstName" fieldName="first Name">
          <Input
            type="text"
            id="firstName"
            placeholder="John"
            {...register("firstName")}
          />
        </FormField>
        <FormField id="lastName" fieldName="last Name">
          <Input
            type="text"
            id="lastName"
            placeholder="Doe"
            {...register("lastName")}
          />
        </FormField>
        <FormField id="email" fieldName="email address">
          <Input
            type="email"
            id="email"
            placeholder="johndoe@gmail.com"
            {...register("email")}
          />
        </FormField>
        <FormField id="phone" fieldName="phone number">
          <Input
            type="tel"
            id="phone"
            placeholder="9849089837"
            {...register("phone")}
          />
        </FormField>
        <FormField id="gender" fieldName="gender">
          <Input
            type="text"
            id="gender"
            placeholder="Male"
            {...register("gender")}
          />
        </FormField>
        <FormField id="password" fieldName="password">
          <Input
            type={isToggled ? "text" : "password"}
            id="password"
            placeholder="********"
            {...register("password")}
          />
          <PasswordToggler isToggled={isToggled} setIsToggled={setIsToggled} />
        </FormField>
        <FormField id="confirmPassword" fieldName="confirn Password">
          <Input
            type={isToggled ? "text" : "password"}
            id="confirmPassword"
            placeholder="confirm password"
            {...register("confirmPassword")}
          />
          <PasswordToggler isToggled={isToggled} setIsToggled={setIsToggled} />
        </FormField>
      </FormContent>
      <ButtonWrapper>
        <Button type="submit">Finish</Button>
      </ButtonWrapper>
    </form>
  );
};

export default PersonalDetailsForm;
