import styled from "styled-components";

export const StepItem = styled.li`
  display: flex;
  gap: 1rem;
  position: relative;
  padding-bottom: 4rem;

  &::before {
    content: "";
    position: relative;
    z-index: 1;
    flex: 0 0 30px;
    height: 30px;
    border-radius: 50%;
    background-color: lightgrey;
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: calc(30px + 8px);
    left: 0;
    bottom: 8px;
    transform: translateX(calc(30px / 2));
    width: 2px;
    /* z-index: -1; */
    background-color: ${({ theme }) => theme.colors.white.regular};
  }

  h3 {
    color: ${({ theme }) => theme.colors.white.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.grey};
  }
`;
