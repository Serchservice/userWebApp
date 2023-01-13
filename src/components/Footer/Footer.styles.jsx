import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.footer`
  width: 100%;
  margin: 54px 0 34px 0;
`;

export const FooterContent = styled.ul`
  width: 100%;
  max-width: 744px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const FooterLink = styled(Link)`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #b3b3b3;
  text-transform: capitalize;
`;
