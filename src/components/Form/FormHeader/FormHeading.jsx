import {
  HeadingWrapper,
  MainHeadingElelemt,
  SubHeadingElement,
} from "./FormHeading.styles";

export const MainHeading = ({ children }) => {
  return <MainHeadingElelemt>{children}</MainHeadingElelemt>;
};

export const SubHeading = ({ children }) => {
  return <SubHeadingElement>{children}</SubHeadingElement>;
};

const FormHeading = ({ children }) => {
  return <HeadingWrapper>{children}</HeadingWrapper>;
};

export default FormHeading;
