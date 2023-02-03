import { StepperWrapper } from "./Stepper.styles";
import StepperItem from "./StepperItem/StepperItem";

const Stepper = ({ steps }) => {
  return (
    <StepperWrapper>
      {steps.map((step, i) => (
        <StepperItem step={step} index={i} />
      ))}
    </StepperWrapper>
  );
};

export default Stepper;
