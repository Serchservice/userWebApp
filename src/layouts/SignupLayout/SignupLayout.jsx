import { steps } from "../../data/steps";
import { Container, MainContent } from "./SignupLayout.styles";
import SignupLeft from "../../components/SignupLeft/SignupLeft";

import { Outlet } from "react-router-dom";
export default function SignupLayout() {
  return (
    <Container>
      <SignupLeft steps={steps} />
      <MainContent>
        <Outlet />
      </MainContent>
    </Container>
  );
}
