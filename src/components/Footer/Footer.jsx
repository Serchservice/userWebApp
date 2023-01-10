import React from "react";
import { FooterWrapper, FooterLink } from "./footer.styles";

function Footer() {
  return (
    <FooterWrapper>
      <FooterLink href="#">privacy policy</FooterLink>
      <FooterLink href="#">accessibility policy</FooterLink>
      <FooterLink href="#">terms and conditions</FooterLink>
    </FooterWrapper>
  );
}

export default Footer;
