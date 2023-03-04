import { UserAvatar } from "./Avatar.styles";
import profilePics from "../../assets/profilePics.jpg";

function Avatar() {
  return (
    <UserAvatar>
      <img src={profilePics} />
    </UserAvatar>
  );
}

export default Avatar;
