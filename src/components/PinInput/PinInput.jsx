import { PinInput as Input } from "./PinInput.styles";
function PinInput() {
  return (
    <Input
      type="tel"
      pattern="[0-9]{1}"
      aria-label="verification pin"
      maxLength="1"
      required
    />
  );
}

export default PinInput;
