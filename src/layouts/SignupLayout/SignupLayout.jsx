import { Container, MainContent } from "./SignupLayout.styles";
import SignupLeft from "../../components/SignupLeft/SignupLeft";

import { Outlet } from "react-router-dom";
export default function SignupLayout({ steps, activeStep, stepHandler }) {
  return (
    <Container>
      <SignupLeft
        steps={steps}
        activeStep={activeStep}
        stepHandler={stepHandler}
      />
      <MainContent>
        <Outlet />
      </MainContent>
    </Container>
  );
}
