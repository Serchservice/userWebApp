import styled from "styled-components";

export const UserAvatar = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: solid ${(props) => props.border || null};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    display: inline-block;
    border-radius: 50%;
  }
`;
