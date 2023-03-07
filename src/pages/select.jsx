import { useRef, useState, useEffect } from "react";
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";

const select = document.querySelector(".PhoneInputCountrySelect");

function PhoneInputField() {
  const [selectValue, setSelectValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const img = document.querySelector(".PhoneInputCountryIconImg");
    if (img) img.alt = "";
  }, [selectValue]);

  const handleSelectChange = (selectValue) => {
    console.log(selectValue);
    console.log(typeof selectValue);
    // select.title = getCountryCallingCode(selectValue);
    setSelectValue(selectValue);
  };

  return (
    <>
      <label htmlFor="number">Phone Number</label>
      <div className=" phone-group">
        <PhoneInput
          value={selectValue}
          defaultCountry="NG"
          international
          countryCallingCodeEditable={false}
          ref={inputRef}
          onChange={handleSelectChange}
        />
      </div>
    </>
  );
}

export default PhoneInputField;
