import React from "react";
import { FooterWrapper, FooterContent, FooterLink } from "./Footer.styles";

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <li>
          <FooterLink to="#">privacy policy</FooterLink>
        </li>
        <li>
          <FooterLink to="#">accessibility policy</FooterLink>
        </li>
        <li>
          <FooterLink to="#">terms and conditions</FooterLink>
        </li>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;
