import { UserAvatar } from "./Avatar.styles";
import profilePics from "../../assets/profilePics.jpg";

function Avatar({ width, height, border }) {
  return (
    <UserAvatar width={width} height={height} border={border}>
      <img src={profilePics} />
    </UserAvatar>
  );
}

export default Avatar;
