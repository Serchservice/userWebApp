import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormHeading, {
  MainHeading,
  SubHeading,
} from "../../components/Form/FormHeader/FormHeading";
import {
  Container,
  FormContent,
  Button,
  ButtonWrapper,
  Right,
  RightContent,
} from "./PersonalDetails.styles";
import FormField from "../../components/Form/FormField/FormField";
import { Input } from "./PersonalDetails.styles";
import PasswordToggler from "../../components/PassWordToggler/PassowrdToggler";
import SignupLeft from "../../components/SignupLeft/SignupLeft";
import PersonalDetailsForm from "../../components/PersonalDetailsForm/PersonalDetailsForm";

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
    description: "We will automatically redirect you to the homepage",
  },
];

const PersonalDetails = () => {
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("personal_details");
  };
  return (
    <Container>
      <SignupLeft steps={steps} />
      <Right>
        <RightContent>
          {/* <form onSubmit={handleSubmit(onSubmit)}>
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
                <PasswordToggler
                  isToggled={isToggled}
                  setIsToggled={setIsToggled}
                />
              </FormField>
              <FormField id="confirmPassword" fieldName="confirn Password">
                <Input
                  type={isToggled ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="confirm password"
                  {...register("confirmPassword")}
                />
                <PasswordToggler
                  isToggled={isToggled}
                  setIsToggled={setIsToggled}
                />
              </FormField>
            </FormContent>
            <ButtonWrapper>
              <Button type="submit">Finish</Button>
            </ButtonWrapper>
          </form> */}
          <PersonalDetailsForm />
        </RightContent>
      </Right>
    </Container>
  );
};

export default PersonalDetails;
