import styled from "styled-components";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import countryFlagEmoji from "country-flag-emoji";
import arrowDown from "../../../assets/arrow-down.png";

export const CountrySelect = ({ value, onChange, labels, ...rest }) => {
  return (
    <SelectWrapper>
      <Select
        {...rest}
        value={value}
        onChange={(event) => onChange(event.target.value || undefined)}
      >
        <option value=""></option>
        {getCountries().map((country) => (
          <option key={country} value={country}>
            {countryFlagEmoji.get(country).emoji} {labels[country]} +
            {getCountryCallingCode(country)}
          </option>
        ))}
      </Select>
    </SelectWrapper>
  );
};

const Select = styled.select`
  background: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  width: clamp(0.9375rem, 0.4572rem + 0.9606vw, 1.5625rem);
  height: clamp(0.9375rem, 0.4572rem + 0.9606vw, 1.5625rem);
  appearance: none;
  font-family: inherit;
  opacity: 0;
  /* display: none; */
  /* visibility: ${({ visibility }) => visibility}; */
  visibility: visible;
  /* background-image: url(${arrowDown}); */
  option {
    background-color: transparent;
    border: none;
    padding-right: 0;
  }
`;

const SelectWrapper = styled.div`
  width: clamp(0.9375rem, 0.4572rem + 0.9606vw, 1.5625rem);
  height: clamp(0.9375rem, 0.4572rem + 0.9606vw, 1.5625rem);
  position: relative;
  background-image: url(${arrowDown});
  background-size: contain;
`;
