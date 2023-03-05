import { StarIcon } from "../Icons/Icons";
import { Wrapper } from "./RatingStars.dtyles";

const RatingStars = () => {
  const stars = [...new Array(5)].map((star, index) => {
    return <StarIcon />;
  });

  return <Wrapper>{stars}</Wrapper>;
};

export default RatingStars;
