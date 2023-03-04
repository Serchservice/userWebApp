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
} from "./HomeScreen.styles";
function HomeScreen() {
  return (
    <Container>
      <Nav>
        <NavTop>
          <Logo src={logo} alt="serch logo" />
          <MenuItems>
            <MenuItem>
              <LinkItems to="#">
                <SafeHomeIcon />
              </LinkItems>
            </MenuItem>
            <MenuItem>
              <LinkItems to="gg">
                <MessageIcon />
              </LinkItems>
            </MenuItem>
            <MenuItem>
              <LinkItems to="gg">
                <CallIcon />
              </LinkItems>
            </MenuItem>
            <MenuItem>
              <LinkItems to="gg">
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
    </Container>
  );
}
export default HomeScreen;
