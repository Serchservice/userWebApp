import { Link } from "react-router-dom";
import styled from "styled-components";
import { SubHeading } from "../../components/Form/FormHeader/FormHeading";

export const Container = styled.main`
  width: 100%;
  max-width: 115rem;
  /* max-height: 1821px; */
  display: flex;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 86px;
  div.footerWrapper {
    display: none;
  }
  @media (max-width: 800px) {
    padding-bottom: 0;
    div.footerWrapper {
      display: block;
    }
  }
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: clamp(1.1875rem, 0.178rem + 3.7562vw, 4.5rem);
  padding-left: clamp(1.3125rem, 0.1506rem + 4.3232vw, 5.125rem);
  p {
    font-weight: 700;
    font-size: clamp(1rem, 0.2315rem + 1.537vw, 2rem);
    line-height: 19px;
    color: #b3b3b3;
    margin-bottom: clamp(2.125rem, 4vw, 3.75rem);
  }

  span.pinOptions {
    /* display: flex; */
    display: inline-block;
    font-size: clamp(1rem, 0.6158rem + 0.7685vw, 1.5rem);
    padding: 17px 19px;
    color: #b3b3b3;
    font-weight: 700;
    line-height: 22px;
    background-color: #f6f6f6;
    border-radius: clamp(0.625rem, 1.2vw, 1.25rem);
    width: 100%;
    max-width: 719px;
    margin-bottom: clamp(2rem, 3vw, 4.8125rem);
  }
`;

export const HeaderText = styled(SubHeading)`
  font-size: clamp(1rem, 0.2315rem + 1.537vw, 2rem);
`;

export const Fieldset = styled.fieldset`
  border: none;
  outline: none;
  legend {
    font-weight: 700;
    font-size: clamp(1.5rem, 0.9236rem + 1.1527vw, 2.25rem);
    line-height: 43px;
    color: #b3b3b3;
    text-align: center;
  }
`;

export const PinInputWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: clamp(1.5rem, 4.5vw, 4.8125rem);
  margin-bottom: 180px;
  gap: clamp(8px, 2vw, 24px);
  @media (max-width: 800px) {
    margin-bottom: 309px;
    justify-content: space-around;
  }
`;

// export const PinInput = styled.input`
//   flex: 1;
//   width: 100%;
//   /* width: clamp(50px, 6vw, 100px); */
//   max-width: 100px;
//   min-width: 45px;
//   height: clamp(8vh, 8vh, 10vh);
//   height: 10vh;
//   max-height: 70px;
//   border: 2px solid #3b043b;
//   border-radius: 10px;
//   display: flex;
//   text-align: center;
//   font-size: 24px;
// `;

export const PinResendOption = styled.div`
  font-weight: 700;
  font-size: clamp(1.25rem, 1.0579rem + 0.3842vw, 1.5rem);
  line-height: 29px;
  color: #b3b3b3;
  text-align: center;
  margin-bottom: 700px;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }
`;

export const PinResetLink = styled(Link)`
  color: #740274;
  text-decoration: underline;
  :visited,
  :active {
    color: #740274;
  }
`;
