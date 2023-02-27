import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container, Right, RightContent } from "./PersonalDetails.styles";
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
          <PersonalDetailsForm />
        </RightContent>
      </Right>
    </Container>
  );
};

export default PersonalDetails;
