import React from "react";
import { HeaderWrapper, Logo, TagLine } from "./Header.styles";
import logo from "../../../assets/LogoWhite.png";

function LoginHeader() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="serch logo" />
      <TagLine>service made easy</TagLine>
    </HeaderWrapper>
  );
}

export default LoginHeader;
