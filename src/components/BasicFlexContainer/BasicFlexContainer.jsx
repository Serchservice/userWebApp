import { Container } from "./BasicFlexContainer.styles";

export const BasicFlexContainer = ({ direction, children }) => {
  return <Container direction={direction}>{children}</Container>;
};
