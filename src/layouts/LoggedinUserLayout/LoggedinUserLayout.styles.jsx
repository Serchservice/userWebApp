import styled from "styled-components";

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

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
