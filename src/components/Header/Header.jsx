import React from "react";
import { HeaderWrapper, Logo, TagLine } from "./header.styles";
import logo from "../../assets/LogoWhite.png";

function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="serch logo" />
      <TagLine>service made easy</TagLine>
    </HeaderWrapper>
  );
}

export default Header;
