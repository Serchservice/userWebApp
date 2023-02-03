import { StepItem } from "./StepperItem.styles";

const StepperItem = ({ step }) => {
  return (
    <StepItem>
      <div>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    </StepItem>
  );
};

export default StepperItem;
