import { useState } from "react";
import { EyeIconClose, EyeIconOpen } from "./EyeIcons/EyeIcons";
import { PasswordTogglerIcon } from "./PasswordToggler.styles";

const PasswordToggler = ({ isToggled, setIsToggled }) => {
  return (
    <PasswordTogglerIcon type="button" onClick={() => setIsToggled(!isToggled)}>
      {isToggled ? <EyeIconOpen /> : <EyeIconClose />}
    </PasswordTogglerIcon>
  );
};
export default PasswordToggler;
