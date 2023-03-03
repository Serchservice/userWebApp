import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
//

import "react-phone-input-2/lib/material.css";
//
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FormHeading, {
  MainHeading,
  SubHeading,
} from "../../components/Form/FormHeader/FormHeading";
import {
  FormContent,
  Button,
  ButtonWrapper,
  Input,
} from "./PersonalDetailsForm.style";
import FormField from "../../components/Form/FormField/FormField";
import PasswordToggler from "../../components/PassWordToggler/PassowrdToggler";
import { width } from "@mui/system";
import { FormControl, InputLabel, TextField } from "@mui/material";

const PersonalDetailsForm = () => {
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/signup/verify_email");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormHeading>
        <MainHeading>Create your Serch account</MainHeading>
        <SubHeading>Your personal details</SubHeading>
      </FormHeading>
      <FormContent>
        <FormField id="firstName" fieldName="first Name">
          <Input
            type="text"
            id="firstName"
            placeholder="John"
            {...register("firstName")}
          />
        </FormField>
        <FormField id="lastName" fieldName="last Name">
          <Input
            type="text"
            id="lastName"
            placeholder="Doe"
            {...register("lastName")}
          />
        </FormField>
        <FormField id="email" fieldName="email address">
          <Input
            type="email"
            id="email"
            placeholder="johndoe@gmail.com"
            {...register("email")}
          />
        </FormField>
        <FormField id="phone" fieldName="phone number">
          {/* <Input
            type="tel"
            id="phone"
            placeholder="9849089837"
            {...register("phone")}
          /> */}
          <label id="phone-label">
            <select id="phoneel-lab" style={{ width: "50px" }}>
              <label>kakkak</label>
              <option>1</option>
              <option>1</option>
            </select>
          </label>
        </FormField>

        <FormField fieldName="Gender">
          <FormControl
            sx={{
              fontFamily: "Inria Sans",
              width: "100%",
              "& label.Mui-focused": { color: "#b3b3b3" },
              "& label.MuiFormLabel-filled": { display: "none" },
            }}
          >
            <InputLabel
              disableAnimation="true"
              shrink="false"
              sx={{
                color: "#b3b3b3",
                marginTop: "25px",
                marginLeft: "-12px",
                fontWeight: 300,
                fontSize: "34px",
                fontFamily: "Inria Sans",
                // ".Mui-focused": { display: "none" },
                // "& legend": { display: "none" },
              }}
            >
              Select your gender
            </InputLabel>
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  {...field}
                  label="Select your gender"
                  IconComponent={ExpandMore}
                  sx={{
                    fontFamily: "Inria Sans",
                    fontWeight: 300,
                    fontSize: "24px",
                    color: "#030001",
                    width: "100%",
                    "&.MuiInputBase-root": {
                      outline: "none",
                      border: "none",
                    },
                    ".MuiOutlinedInput-notchedOutline": {
                      outline: "none",
                      border: "none",
                      boxShadow: "none",
                    },
                  }}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="prefer not to say">
                    prefer not to say
                  </MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </FormField>
        <FormField id="password" fieldName="password">
          <Input
            type={isToggled ? "text" : "password"}
            id="password"
            placeholder="********"
            {...register("password")}
          />
          <PasswordToggler isToggled={isToggled} setIsToggled={setIsToggled} />
        </FormField>
        <FormField id="confirmPassword" fieldName="confirn Password">
          <Input
            type={isToggled ? "text" : "password"}
            id="confirmPassword"
            placeholder="confirm password"
            {...register("confirmPassword")}
          />
          <PasswordToggler isToggled={isToggled} setIsToggled={setIsToggled} />
        </FormField>
      </FormContent>
      <ButtonWrapper>
        <Button type="submit">Finish</Button>
      </ButtonWrapper>
    </form>
  );
};

export default PersonalDetailsForm;
