import { useState } from "react";
import { useLocation } from "react-router-dom";
import { StepperWrapper } from "./Stepper.styles";
import StepperItem from "./StepperItem/StepperItem";

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(steps[0].step);
  const loaction = useLocation();

  const nextHandler = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const stepBg = (path, index) => {
    if (path === location) {
      console.log("ongoing");
    }
    if (path !== location && index < currentStep) {
      console.log("completed");
    }

    console.log("next");
  };
  return (
    <StepperWrapper>
      {steps.map((step, i) => (
        <StepperItem
          key={i}
          step={step}
          index={i}
          stepBg={stepBg(step.path, i)}
        />
      ))}
    </StepperWrapper>
  );
};

export default Stepper;
