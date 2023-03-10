import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const MenuItem = styled.li`
  width: 70px;
  height: 70px;
`;

export const NavLink = styled(Link)`
  width: inherit;
  height: inherit;
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
