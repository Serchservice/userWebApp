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
  MenuItems,
  MenuItem,
  LinkItems,
  Container,
  Logo,
  Nav,
  NavTop,
  NavBottom,
} from "./LoggedinUserlaOut.styles";
import { Outlet } from "react-router-dom";
export default function LoggedinUserLayout() {
  return (
    <Container>
      <Nav>
        <NavTop>
          <Logo src={logo} alt="serch logo" />
          <MenuItems>
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
          </MenuItems>
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
