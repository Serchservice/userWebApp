import {
  Container,
  Left,
  LogoWrapper,
  LeftContent,
  Right,
  AccountOption,
  HeaderWrapper,
  RightContent,
} from "./Signup.styles";
import Logo from "../../assets/LogoWhite.png";
import Stepper from "../../components/Stepper/Stepper";
import Footer from "../../components/Footer/Footer";
import SignupForm from "../../components/Form/SignupForm";
import Header from "../../components/Header/Header";

const steps = [
  {
    step: 1,
    title: "Your personal details",
    description: "please provide us with your email and other information.",
  },
  {
    step: 2,
    title: "select a plan",
    description:
      "From the list of Serch subscription plans, choose the one that most appeals to you.",
  },
  {
    step: 3,
    title: "Select a service and pay",
    description:
      "From the plan selected, you will choose the service you want and subscribe.",
  },
];

const Signup = () => {
  return (
    <Container>
      <Left>
        <LogoWrapper>
          <img src={Logo} alt="serch app logo" />
        </LogoWrapper>
        <LeftContent>
          <Stepper steps={steps} />
          <AccountOption>
            <p>Already have an account</p>
            <span>Log me in</span>
          </AccountOption>
        </LeftContent>
        <Footer page="signup" />
      </Left>
      <Right>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <RightContent>
          <SignupForm />
        </RightContent>
      </Right>
    </Container>
  );
};

export default Signup;
