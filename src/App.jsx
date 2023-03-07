import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
// import EmailVerifiaction from "./pages/EmailVeification/EmailVerification";
import VerifyEmail from "./pages/EmailVeification/VefrifyEmail";
import Home from "./pages/Home/Home";
import LoggedinUserLayout from "./layouts/LoggedinUserLayout/LoggedinUserLayout";
import Chat from "./pages/Chat/Chat";
import Call from "./pages/Call/Call";
import Settings from "./pages/Settings/Settings";
import UserProfile from "./pages/Profile/UserProfile";
import SignupLayout from "./layouts/SignupLayout/SignupLayout";
import PersonalDetails from "./pages/PersonalDetails/PersonalDetails";
import Select from "./pages/select";
import { PhoneInputField } from "./components/PhoneInputField/PhoneInputField";

function App() {
  return (
    <>
      <Routes>
        <Route path="select" element={<PhoneInputField />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupLayout />}>
          <Route index element={<PersonalDetails />} />
          <Route path="personal_details" element={<PersonalDetails />} />
          <Route path="verify_email" element={<VerifyEmail />} />
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
