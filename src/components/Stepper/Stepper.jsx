import { stepsIcon } from "../../data/stepIconData";
import { StepperWrapper } from "./Stepper.styles";
import StepperItem from "./StepperItem/StepperItem";
import { useBackListener } from "../../hooks/useBackListener";

const Stepper = ({ steps, activeStep, stepHandler }) => {
  let stepIcon;

  const setStepIcon = (step) => {
    if (step === activeStep) {
      stepIcon = stepsIcon.ongoing;
    }
    if (step < activeStep) {
      stepIcon = stepsIcon.done;
    }

    if (step > activeStep) {
      stepIcon = stepsIcon.undone;
    }
    return stepIcon;
  };

  useBackListener(() => {
    stepHandler("decrease");
  });

  return (
    <StepperWrapper>
      {steps.map((step) => (
        <StepperItem
          key={step.step}
          step={step}
          stepBg={setStepIcon(step.step)}
        />
      ))}
    </StepperWrapper>
  );
};

export default Stepper;
