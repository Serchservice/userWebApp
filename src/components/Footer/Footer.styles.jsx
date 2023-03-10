import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.footer`
  width: 100%;
  margin: 54px 0 34px 0;
  @media (max-width: 480px) {
    margin: 142px 0 20px 0;
  }
`;

export const FooterContent = styled.ul`
  width: 90%;
  max-width: 744px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* border: solid red 2px; */
  text-align: center;
  @media (max-width: 480px) {
    /* width: 90%; */
    /* max-width: 390px; */
    /* padding: 0 19px; */
  }
`;

export const FooterLink = styled(Link)`
  font-size: 20px;
  font-size: clamp(12px, 0.54rem + 0.79vw, 20px);
  line-height: 24px;
  font-weight: 400;
  color: #b3b3b3;

  text-transform: capitalize;
  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 15px;
  }
`;
