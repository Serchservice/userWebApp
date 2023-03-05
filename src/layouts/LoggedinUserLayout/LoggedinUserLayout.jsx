import logo from "../../assets/logo.svg";
import Avatar from "../../components/Avatar/Avatar";
import {
  SafeHomeIcon,
  MessageIcon,
  ProfileCircleIcon,
  CallIcon,
  SettingIcon,
  ArrowRightIcon,
} from "./Icons";
import {
  NavMenu,
  MenuItem,
  LinkItems,
  Container,
  Logo,
  Nav,
  NavTop,
  NavBottom,
} from "./LoggedinUserLayout.styles";
import { Outlet } from "react-router-dom";
export default function LoggedinUserLayout() {
  return (
    <Container>
      <Nav>
        <NavTop>
          <Logo src={logo} alt="serch logo" />
          <NavMenu>
            <MenuItem>
              <LinkItems to="home">
                <SafeHomeIcon />
              </LinkItems>
            </MenuItem>
            <MenuItem>
              <LinkItems to="chat">
                <MessageIcon />
              </LinkItems>
            </MenuItem>
            <MenuItem>
              <LinkItems to="call">
                <CallIcon />
              </LinkItems>
            </MenuItem>
            <MenuItem>
              <LinkItems to="settings">
                <SettingIcon />
              </LinkItems>
            </MenuItem>
            <MenuItem>
              <LinkItems to="gg">
                <ProfileCircleIcon />
              </LinkItems>
            </MenuItem>
          </NavMenu>
        </NavTop>
        <NavBottom>
          <Avatar />
          <span>
            <ArrowRightIcon />
          </span>
        </NavBottom>
      </Nav>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </Container>
  );
}
