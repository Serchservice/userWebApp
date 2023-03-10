import PhoneInput from "react-phone-number-input/react-hook-form-input";
import styled from "styled-components";

export const PhoneNumberInput = ({ country, value, onChange, control }) => {
  return (
    <InputWrapper>
      <PhoneInput
        name="phoneNumber"
        control={control}
        rules={{
          required: "phone number is required",
        }}
        international
        country={country}
        defaultCountry="NG"
        value={value}
        onChange={onChange}
        placeholder="984 908 9837"
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: clamp(1.25rem, 2.3vw, 2.125rem);
  input {
    font-size: 1em;
  }
`;
