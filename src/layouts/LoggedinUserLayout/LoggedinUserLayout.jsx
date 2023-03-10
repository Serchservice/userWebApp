import logo from "../../assets/logo.svg";
import Avatar from "../../components/Avatar/Avatar";
import NavMenuItem from "../../components/NavMenuItem/NavMenuItem";
import {
  SafeHomeIcon,
  ChatIcon,
  ProfileCircleIcon,
  CallIcon,
  SettingIcon,
  ArrowRightIcon,
} from "./Icons";
import {
  NavMenu,
  Container,
  Logo,
  Nav,
  NavTop,
  NavBottom,
  MainContent,
} from "./LoggedinUserLayout.styles";
import { Outlet } from "react-router-dom";
export default function LoggedinUserLayout() {
  return (
    <Container>
      <Nav>
        <NavTop>
          <Logo src={logo} alt="serch logo" />
          <NavMenu>
            <NavMenuItem path="home" icon={<SafeHomeIcon />} />
            <NavMenuItem path="chat" icon={<ChatIcon />} />
            <NavMenuItem path="call" icon={<CallIcon />} />
            <NavMenuItem path="settings" icon={<SettingIcon />} />
            <NavMenuItem path="profile" icon={<ProfileCircleIcon />} />
          </NavMenu>
        </NavTop>
        <NavBottom>
          <Avatar width="100px" height="100px" />
          <span>
            <ArrowRightIcon />
          </span>
        </NavBottom>
      </Nav>
      <MainContent>
        <Outlet />
      </MainContent>
    </Container>
  );
}
