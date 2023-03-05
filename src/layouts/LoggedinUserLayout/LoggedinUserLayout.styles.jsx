import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Container = styled.main`
  width: 100%;
  max-width: 115rem;
  background: #fdfdfd;
  /* max-height: 1821px; */
  display: flex;
`;

export const Nav = styled.nav`
  width: 131px;
  height: 100%;
  background: #030001;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 30px;
  padding-bottom: 40px;
`;

export const NavTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 181px;
`;

export const Logo = styled.img`
  width: 80px;
  height: 76.92px;
  display: inline-block;
`;

export const NavMenu = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 76px;

  li a.active {
    border-radius: 50%;
    background-color: white;
    svg {
      color: black;
    }
  }
`;

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

  /* .active {
    background-color: green;
    border: solid red 1px;
    svg {
      color: orange;
    }
  } */

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

export const NavBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  margin-top: 700px;
  span {
    cursor: pointer;
  }
`;
