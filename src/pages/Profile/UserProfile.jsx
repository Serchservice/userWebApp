import Avatar from "../../components/Avatar/Avatar";
import { BasicFlexContainer as Container } from "../../components/BasicFlexContainer/BasicFlexContainer";
import {
  FlagNgIcon,
  LandmarkIcon,
  PhoneIcon,
} from "../../components/Icons/Icons";
import RatingStars from "../../components/RatingStarts/RatingStart";
import {
  BasicDetails,
  Header,
  HeaderContent,
  ProfileContent,
  RatingItems,
  ScheduledServices,
  UserRating,
} from "./UserProfile.styles";

export default function UserProfile() {
  return (
    <Container direction="column">
      <Header>
        <HeaderContent>
          <Avatar width="300px" heigth="300px" border="10px #FDFDFD" />
          <span>offline</span>
          <button>edit profile</button>
        </HeaderContent>
      </Header>
      <ProfileContent>
        <BasicDetails>
          <h2>john doe</h2>
          <p className="email">johndoe@gmail.com</p>
          <span>
            <p className="phone">
              <i>
                <PhoneIcon />
              </i>
              +2349089568945
            </p>
            <p className="country">
              <i className="landmark">
                <LandmarkIcon />
              </i>
              nigeria
              <i className="flag" />
            </p>
          </span>
        </BasicDetails>
        <ScheduledServices>
          <p>List of scheduled services will appear here</p>
        </ScheduledServices>
        <UserRating>
          <RatingItems>
            <RatingStars />
            <p>Total Star Rate</p>
          </RatingItems>
          <RatingItems>
            <span>0.0</span>
            <p>Average Rating</p>
          </RatingItems>
          <RatingItems>
            <span>0</span>
            <p>Number of Rating</p>
          </RatingItems>
        </UserRating>
      </ProfileContent>
    </Container>
  );
}
