import { useForm } from "react-hook-form";

import FormHeading, {
  MainHeading,
  SubHeading,
} from "../../components/Form/FormHeader/FormHeading";
import { Right } from "./EmailVerification.styles";
import { RightContent } from "./EmailVerification.styles";

const EmailVerifiaction = () => {
  return (
    <>
      <Right>
        <RightContent>
          <h1>verify</h1>
        </RightContent>
      </Right>
    </>
  );
};

export default EmailVerifiaction;
