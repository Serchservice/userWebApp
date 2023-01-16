import styled from "styled-components";
import serchBgImage from "../../assets/SerchWatermark.png";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr, 100px;
  position: relative;
  min-width: 360px;
`;

export const Main = styled.main`
  width: 90%;
  max-width: 943px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 430px) {
    width: 90%;
    /* min-width: 0px; */
    /* padding: 0 19px; */
  }
`;

export const WelcomeMessage = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 108px;
  @media (max-width: 480px) {
    margin-top: 136px;
  }
`;

export const WelcomeMessageHeader = styled.p`
  font-size: 40px;
  font-size: clamp(32px, 1.78rem + 0.79vw, 40px);
  font-weight: 700;
  line-height: 48px;
  color: #000;
  @media (max-width: 480px) {
    /* font-size: 32px; */
    line-height: 38px;
  }
`;

export const WelcomeMessageText = styled.p`
  font-size: 32px;
  font-size: clamp(24px, 1.287rem + 0.79vw, 32px);
  font-weight: 700;
  line-height: 38px;
  color: #b3b3b3;
  @media (max-width: 480px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
  }
`;

export const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 95px;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 70px;
  z-index: -3;
`;

export const BackgroundSerchText = styled.span`
  font-weight: 700;
  /* font-size: 128px; */
  font-size: clamp(4rem, 2.29rem + 6.3vw, 8rem);
  line-height: 153px;
  color: #f0f0f0;
  display: block;
  position: absolute;
  left: ${(props) => (props.left ? "-140px" : "815px")};
  bottom: 40px;
  z-index: -3;
  /* border: solid green 3px; */
`;

export const SerchBgImgWrapper = styled.div`
  /* width: 100%; */
  width: 315px;
  height: 100px;
  position: absolute;
  left: -170px;
  margin-left: 40px;
  z-index: -3;
  bottom: 40px;
  background-image: url(${serchBgImage});
  /* margin-left: -140px; */
  /* left: ${(props) => (props.left ? "-140px" : "815px")}; */
`;

export const SerchBgImg = styled.img`
  max-width: 100%;
  height: auto;
`;
