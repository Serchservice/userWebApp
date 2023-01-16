import styled from "styled-components";
import checked from "../../assets/checked.svg";

export const Input = styled.input`
  /* width: 100%; */
  -webkit-appearance: none;
  appearance: none;
  border: solid #000 1px;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  @media (max-width: 430px) {
    width: 20px;
    height: 20px;
  }
  &:checked {
    position: relative;
  }

  &:checked::before {
    content: "";
    position: absolute;
    background-image: url(${checked});
    background-size: contain;
    background-position: 3px 3px;
    background-repeat: no-repeat;
    height: 20px;
    width: 30px;
    @media (max-width: 430px) {
      transform: scale(1);
      background-position: 2px 1px;
      height: 15px;
      width: 20px;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;

  span {
    font-weight: 300;
    /* font-size: 24px; */
    font-size: clamp(14px, 0.5025rem + 1.3861vw, 24px);
    line-height: 29px;
    margin-left: 16px;
    text-transform: capitalize;
    @media (max-width: 430px) {
      font-weight: 400;
      /* font-size: 14px; */
      line-height: 17px;
      margin-left: 7px;
    }
  }
`;
