import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import VerifyEmail from "./pages/EmailVeification/VefrifyEmail";
import Home from "./pages/Home/Home";
import LoggedinUserLayout from "./layouts/LoggedinUserLayout/LoggedinUserLayout";
import Chat from "./pages/Chat/Chat";
import Call from "./pages/Call/Call";
import Settings from "./pages/Settings/Settings";
import UserProfile from "./pages/Profile/UserProfile";
import SignupLayout from "./layouts/SignupLayout/SignupLayout";
import PersonalDetails from "./pages/PersonalDetails/PersonalDetails";
import { PhoneInputField } from "./components/PhoneInputField/PhoneInputField";
import { steps } from "./data/steps";

function App() {
  const [activeStep, setActiveStep] = useState(steps[0].step);
  const stepHandler = (action) => {
    if (action === "increase") {
      if (activeStep < steps.length) {
        setActiveStep(activeStep + 1);
      }
    }
    if (action === "decrease") {
      if (activeStep > 1) {
        setActiveStep(activeStep - 1);
      }
    }
  };

  return (
    <>
      <Routes>
        <Route path="select" element={<PhoneInputField />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/signup"
          element={
            <SignupLayout
              steps={steps}
              activeStep={activeStep}
              stepHandler={stepHandler}
            />
          }
        >
          <Route
            index
            element={<PersonalDetails stepHandler={stepHandler} />}
          />
          <Route
            path="personal_details"
            element={<PersonalDetails stepHandler={stepHandler} />}
          />
          <Route
            path="verify_email"
            element={<VerifyEmail tepHandler={stepHandler} />}
          />
        </Route>
        <Route path="/user" element={<LoggedinUserLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="call" element={<Call />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
