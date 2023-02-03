import { Container, Left, LogoWrapper, Right } from "./Signup.styles";
import Logo from "../../assets/LogoWhite.png";
import Stepper from "../../components/Stepper/Stepper";

const steps = [
  {
    step: 1,
    title: "Your personal details",
    description: "please provide us with your email and other information",
  },
  {
    step: 2,
    title: "select a plan",
    description:
      "From the list of Serch subscription plans, choose the one that most appeals to you",
  },
  {
    step: 3,
    title: "Select a service and pay",
    description:
      "From the plan selected, you will choose the service you want and subscribe",
  },
];

const Signup = () => {
  return (
    <Container>
      <Left>
        <LogoWrapper>
          <img src={Logo} alt="serch app logo" />
          <Stepper steps={steps} />
        </LogoWrapper>
      </Left>
      <Right>
        <p>Right</p>
      </Right>
    </Container>
  );
};

export default Signup;
