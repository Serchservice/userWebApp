import styled from "styled-components";

export const StepItem = styled.li`
  display: flex;
  gap: 1rem;
  position: relative;
  padding-bottom: 28px;

  &::before {
    content: "";
    position: relative;
    z-index: 1;
    flex: 0 0 clamp(2rem, 1.6158rem + 0.7685vw, 2.5rem);
    height: clamp(2rem, 1.6158rem + 0.7685vw, 2.5rem);
    border-radius: 50%;
    background-color: lightgrey;
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: calc(clamp(2rem, 1.6158rem + 0.7685vw, 2.5rem) + 8px);
    left: 0;
    bottom: 8px;
    transform: translateX(calc(clamp(2rem, 1.6158rem + 0.7685vw, 2.5rem) / 2));
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
