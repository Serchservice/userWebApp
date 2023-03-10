import { getCountryCallingCode } from "react-phone-number-input";
import styled from "styled-components";

export const RenderDialCode = ({ country }) => {
  // const countryCode = country || "NG";
  return (
    <DialCodeWrapper>
      {country ? (
        <span>+{getCountryCallingCode(country)}</span>
      ) : (
        <span>+234</span>
      )}
    </DialCodeWrapper>
  );
};

const DialCodeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: clamp(0.5625rem, 1vw, 1.0625rem);
  span {
    font-weight: 700;
    font-size: clamp(1.125rem, 0.4526rem + 1.3449vw, 2rem);
    /* line-height: 38px; */
    color: #b3b3b3;
  }
`;
