import {
  Left,
  LogoWrapper,
  LeftContent,
  AccountOption,
} from "./SignupLeft.styles";
import Logo from "../../assets/LogoWhite.png";
import Stepper from "../../components/Stepper/Stepper";
import Footer from "../../components/Footer/Footer";

const SignupLeft = ({ steps }) => {
  return (
    <>
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
    </>
  );
};

export default SignupLeft;
