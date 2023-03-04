import { Routes, Route } from "react-router-dom";
import PersonalDetailsForm from "./pages/PersonalDetails/PersonalDetails";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
// import EmailVerifiaction from "./pages/EmailVeification/EmailVerification";
import VerifyEmail from "./pages/EmailVeification/VefrifyEmail";
import HomeScreen from "./pages/HomeScreen/HomeScreen";

const steps = [
  {
    step: 1,
    title: "Your personal details",
    description: "please provide us with your email and other information.",
    path: "signup/personal_details",
  },
  {
    step: 2,
    title: "verify your email",
    description:
      "We will send you a verification link and OTP to verifiy the email you provide to Serch",
    path: "signup/verify_email",
  },
  {
    step: 3,
    title: "You're in!",
    description: "We will automatically redirect you to the homepage",
  },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/signup/personal_details"
          element={<PersonalDetailsForm />}
        />
        <Route path="/signup/verify_email" element={<VerifyEmail />} />
        <Route path="/user/home" element={<HomeScreen />} />
      </Routes>
    </>
  );
}

export default App;
