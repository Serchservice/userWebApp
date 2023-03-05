import styled from "styled-components";

export const MenuItem = styled.li`
  width: 70px;
  height: 70px;
`;

export const LinkItems = styled(NavLink)`
  width: inherit;
  height: inherit;
  /* border: solid white 1px; */
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-radius: 50%;
    background-color: white;
    svg {
      color: black;
    }
  }

  &:focus {
    border-radius: 50%;
    background-color: white;
    svg {
      color: black;
    }
  }
  svg {
    color: white;
  }
`;
