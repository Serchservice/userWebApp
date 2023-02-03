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
    flex: 0 0 40px;
    height: 40px;
    border-radius: 50%;
    background-color: lightgrey;
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: calc(40px + 8px);
    left: 0;
    bottom: 8px;
    transform: translateX(calc(40px / 2));
    width: 2px;
    /* z-index: -1; */
    background-color: ${({ theme }) => theme.colors.white.regular};
  }

  h3 {
    color: ${({ theme }) => theme.colors.white.primary};
    font-weight: 700;
    font-size: clamp(1.125rem, 0.5098rem + 1.2951vw, 2rem);
    line-height: 38px;
  }

  p {
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 700;
    font-size: clamp(0.875rem, 0.4356rem + 0.9251vw, 1.5rem);
    line-height: 29px;
  }
`;
