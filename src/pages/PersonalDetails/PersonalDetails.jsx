import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Right, RightContent } from "./PersonalDetails.styles";
import PersonalDetailsForm from "../../components/PersonalDetailsForm/PersonalDetailsForm";

const PersonalDetails = () => {
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
      <RightContent>
        <PersonalDetailsForm />
      </RightContent>
    </Right>
  );
};

export default PersonalDetails;
