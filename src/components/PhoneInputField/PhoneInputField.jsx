import { useState } from "react";
import en from "react-phone-number-input/locale/en";
import { RenderFlag } from "./RenderFlag/RenderFlag";
import { CountrySelect } from "./CountrySelect/CountrySelect";
import { PhoneNumberInput } from "./PhoneNumberInput/PhoneNumberInput";
import { RenderDialCode } from "./RenderDialCode/RenderDialCode";
import {
  FieldWrapper,
  FormField,
  InputWrapper,
  Label,
  SelectWrapper,
  ValidationMessage,
} from "./PhoneInputField.styles";

export const PhoneInputField = ({ control, errors }) => {
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log(phoneNumber, errors);
  return (
    <FormField>
      <Label>phone number</Label>
      <FieldWrapper>
        <SelectWrapper>
          <RenderFlag
            country={country}
            width="1.1875rem, 2.2vw, 2.25rem"
            height="(1.1875rem, 2.2vw, 2rem);"
          />
          <RenderDialCode country={country} />
          <CountrySelect labels={en} value={country} onChange={setCountry} />
        </SelectWrapper>
        <InputWrapper>
          <PhoneNumberInput
            country={country}
            value={phoneNumber}
            onChange={setPhoneNumber}
            control={control}
          />
        </InputWrapper>
      </FieldWrapper>
      <ValidationMessage>{errors.phoneNumber?.message}</ValidationMessage>
      {/* <ValidationMessage>{errors.phoneNumber?.}</ValidationMessage> */}
    </FormField>
  );
};
