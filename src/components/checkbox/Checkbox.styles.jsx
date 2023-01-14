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
    background-color: yellow;
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
      width: 20px;
      height: 20px;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;

  span {
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    margin-left: 16px;
    text-transform: capitalize;
    @media (max-width: 430px) {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      margin-left: 7px;
    }
  }
`;
