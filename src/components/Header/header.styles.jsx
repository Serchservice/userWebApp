import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  /* min-width: 430px; */
  background-color: #030001;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  @media (max-width: 430px) {
    padding: 0 19px;
  }
`;

export const Logo = styled.img`
  width: 45px;
  height: 45px;
`;

export const TagLine = styled.span`
  font-size: 24px;
  font-size: clamp(15px, 0.96rem + 0.59vw, 20px);
  line-height: 29px;
  font-weight: 700;
  color: #f0f0f0;
  @media (max-width: 430px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
