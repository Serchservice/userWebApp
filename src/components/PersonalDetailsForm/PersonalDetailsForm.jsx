import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormHeading, {
  MainHeading,
  SubHeading,
} from "../../components/Form/FormHeader/FormHeading";
import {
  FormContent,
  Button,
  ButtonWrapper,
  Input,
} from "./PersonalDetailsForm.style";
import FormField from "../../components/Form/FormField/FormField";
import PasswordToggler from "../../components/PassWordToggler/PassowrdToggler";

const PersonalDetailsForm = () => {
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/signup/verify_email");
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
