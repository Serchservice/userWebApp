import styled from "styled-components";
import backgroundPic from "../../assets/profileHeaderBackground.png";

export const Header = styled.section`
  width: 100%;
  /* height: 496px; */
  background-image: url(${backgroundPic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-left: 59px;
  padding-top: 176px;
  padding-bottom: 20px;
  position: relative;
  /* object-fit: contain; */
  /* background-position: top; */
  /* background-origin: content-box; */
`;

export const HeaderContent = styled.article`
  display: flex;
  align-items: flex-end;

  span {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #b3b3b3;
    padding: 4px 26px;
    background: #d9d9d9;
    border-radius: 10px;
  }

  button {
    width: 160px;
    height: 61px;
    background: #fdfdfd;
    border: 2px solid #740274;
    color: #740274;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 54px;
    bottom: -23px;
    /* top: 458px; */
    /* text-align: center; */
    text-transform: capitalize;
    /* padding: 16px; */
  }
`;
