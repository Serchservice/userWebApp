import Avatar from "../../components/Avatar/Avatar";
import { BasicFlexContainer as Container } from "../../components/BasicFlexContainer/BasicFlexContainer";
import { Header, HeaderContent } from "./UserProfile.styles";

export default function UserProfile() {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Avatar width="300px" heigth="300px" border="10px #FDFDFD" />
          <span>offline</span>
          <button>edit profile</button>
        </HeaderContent>
      </Header>
    </Container>
  );
}
