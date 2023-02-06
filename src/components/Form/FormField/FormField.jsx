import { FieldWrapper, InputFieldWrapper, Label } from "./FormField.styles";

const FormField = ({ children, id, fieldName }) => {
  return (
    <FieldWrapper>
      <Label htmlFor={id}>{fieldName}</Label>
      <InputFieldWrapper>{children}</InputFieldWrapper>
    </FieldWrapper>
  );
};

export default FormField;
