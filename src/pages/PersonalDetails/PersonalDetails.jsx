import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoginHeader from "../../components/Headers/Login/Header";
import Footer from "../../components/Footer/Footer";
import { Right, RightContent } from "./PersonalDetails.styles";
import PersonalDetailsForm from "../../components/PersonalDetailsForm/PersonalDetailsForm";

const PersonalDetails = ({ stepHandler }) => {
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("personal_details");
  };
  return (
    <Right>
      <LoginHeader />
      <RightContent>
        <PersonalDetailsForm stepHandler={stepHandler} />
      </RightContent>
      <div className="footerWrapper">
        <Footer page="login" />
      </div>
    </Right>
  );
};

export default PersonalDetails;
