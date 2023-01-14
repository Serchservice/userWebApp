import { useForm } from "react-hook-form";
import Text from "../../components/Text/Text";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LoginForm from "./LoginForm/LoginForm";
import {
  BackgroundSerchText,
  BackgroundWrapper,
  Container,
  Main,
  WelcomeMessage,
  WelcomeMessageHeader,
  WelcomeMessageText,
} from "./Login.styles";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log(errors);
  return (
    <Container>
      <Header />
      <Main>
        <WelcomeMessage>
          <WelcomeMessageHeader> Hi there,</WelcomeMessageHeader>
          <WelcomeMessageText>Good to have you back</WelcomeMessageText>
        </WelcomeMessage>
        <LoginForm
          register={register}
          handleSubmit={handleSubmit}
          handler={onSubmit}
          errors={errors}
        />
      </Main>
      <BackgroundWrapper>
        <BackgroundSerchText>serch</BackgroundSerchText>
        <BackgroundSerchText>serch</BackgroundSerchText>
      </BackgroundWrapper>
      <Footer />
    </Container>
  );
};

export default Login;
