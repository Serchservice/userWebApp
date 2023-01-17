import { Input, Label } from "./Checkbox.styles";

const Checkbox = ({ label }) => {
  return (
    <Label htmlFor="checkbox">
      <Input type="checkbox" id="checkbox" />
      <span>{label}</span>
    </Label>
  );
};

export default Checkbox;
