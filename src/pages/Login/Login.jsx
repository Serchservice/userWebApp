import Text from "../../components/Text/Text";
import Header from "../../components/Header/Header";
import LoginForm from "./LoginForm/LoginForm";
import { Container, Main, WelcomeMessage } from "./Login.styles";

const Login = () => {
  return (
    <Container>
      <Header />
      <Main>
        <WelcomeMessage>
          <Text color="#000" fontSize="40px" fontWeight="700" lineHeight="48px">
            Hi there,
          </Text>
          <Text
            color="#B3B3B3"
            fontSize="32px"
            fontWeight="700"
            lineHeight="38px"
          >
            Good to have you back
          </Text>
        </WelcomeMessage>
        <LoginForm />
      </Main>
    </Container>
  );
};

export default Login;
