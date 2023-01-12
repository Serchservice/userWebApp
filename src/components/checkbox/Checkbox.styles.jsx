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
    /* border: 3px solid green; */
    /* top: 5px; */
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 24px;
  color: #030001;
  line-height: 29px;
  margin-bottom: 5px;
  text-transform: capitalize;

  span {
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    margin-left: 16px;
  }
`;
