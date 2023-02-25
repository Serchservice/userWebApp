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
import PersonalDetailsForm from "../../components/Form/PersonalDetails/PersonalDetails";
import Header from "../../components/Header/Header";

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
          <PersonalDetailsForm />
        </RightContent>
      </Right>
    </Container>
  );
};

export default Signup;
