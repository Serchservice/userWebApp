import { StepItem } from "./StepperItem.styles";

const StepperItem = ({ step, stepBg }) => {
  console.log();
  return (
    <StepItem stepBg={stepBg}>
      <div>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    </StepItem>
  );
};

export default StepperItem;
