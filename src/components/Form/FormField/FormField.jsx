import { FieldWrapper, InputFieldWrapper, Label } from "./FormField.styles";

const FormField = ({ children, id, fieldName, noPadding }) => {
  return (
    <FieldWrapper>
      <Label htmlFor={id}>{fieldName}</Label>
      <InputFieldWrapper noPadding={noPadding}>{children}</InputFieldWrapper>
    </FieldWrapper>
  );
};

export default FormField;
