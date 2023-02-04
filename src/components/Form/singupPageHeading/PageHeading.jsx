import { MainHeadingElelemt, SubHeadingElement } from "./PageHeading.styles";

export const MainHeading = ({ children }) => {
  return <MainHeadingElelemt>{children}</MainHeadingElelemt>;
};

export const SubHeading = ({ children }) => {
  return <SubHeadingElement>{children}</SubHeadingElement>;
};
