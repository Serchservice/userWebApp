import React from "react";
import { FooterWrapper, FooterContent, FooterLink } from "./Footer.styles";

function Footer({ page }) {
  return (
    <FooterWrapper page={page}>
      <FooterContent page={page}>
        <li>
          <FooterLink to="#" page={page}>
            privacy policy
          </FooterLink>
        </li>
        <li>
          <FooterLink to="#" page={page}>
            accessibility policy
          </FooterLink>
        </li>
        <li>
          <FooterLink to="#" page={page}>
            terms and conditions
          </FooterLink>
        </li>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;
