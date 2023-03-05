import { PlaceholderItem, PlaceholderWrapper } from "./Placeholder.styles";

export const PlaceHolder = ({ padding }) => {
  return (
    <PlaceholderWrapper padding={padding}>
      <PlaceholderItem />
      <PlaceholderItem />
      <PlaceholderItem />
      <PlaceholderItem />
      <PlaceholderItem />
      <PlaceholderItem />
      <PlaceholderItem />
      <PlaceholderItem />
    </PlaceholderWrapper>
  );
};
