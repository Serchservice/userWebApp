import styled from "styled-components";
import backgroundPic from "../../assets/profileHeaderBackground.png";
import flag from "../../assets/ng.png";

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
    text-transform: capitalize;
  }
`;
export const ProfileContent = styled.section`
  display: flex;
  flex-direction: column;
  padding: 23px 50px 17px;
  width: 100%;
  height: 344px;
  border-bottom: solid 5px #d9d9d9;
`;

export const BasicDetails = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 23px;

  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #030001;
    text-transform: capitalize;
  }

  p.email {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #07070a;
    margin-bottom: 20px;
  }

  span {
    width: 100%;
    max-width: 453px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p.phone {
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #000870;
      i {
        margin-right: 15px;
      }
    }

    p.country {
      display: flex;
      align-items: flex-start;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #07070a;
      text-transform: capitalize;
      i.landmark {
        margin-right: 19px;
      }
      i.flag {
        margin-left: 13px;
        width: 50px;
        height: 25px;
        display: inline-block;
        background-image: url(${flag});
      }
    }
  }
`;

export const ScheduledServices = styled.div`
  width: 100%;
  max-width: 713px;
  padding: 13px 19px;
  background: #ececec;
  border-radius: 10px;
  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #949494;
  }
`;

export const UserRating = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 81px;
  margin-top: 27px;
`;

export const RatingItems = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: #4c4c4c;
  }
  p {
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: #727272;
  }
`;
