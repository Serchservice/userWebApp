import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.main`
  width: 100%;
  max-width: 115rem;
  /* max-height: 1821px; */
  display: flex;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 86px;
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: clamp(1.1875rem, 0.178rem + 3.7562vw, 4.5rem);
  padding-left: clamp(1.3125rem, 0.1506rem + 4.3232vw, 5.125rem);
`;

export const ActivationGuide = styled.p`
  padding: 17px 19px;
  margin: 60px 0;
  color: #b3b3b3;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  background-color: #f6f6f6;
  border-radius: 20px;
`;

export const ActivationInstruction = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  color: #b3b3b3;
  text-align: center;
`;

export const PinInputWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 77px;
  margin-bottom: 180px;
  gap: clamp(8px, 2vw, 24px);
`;

export const PinInput = styled.input`
  flex: 1;
  width: 100%;
  /* width: clamp(50px, 6vw, 100px); */
  max-width: 100px;
  min-width: 45px;
  height: clamp(8vh, 8vh, 10vh);
  height: 10vh;
  max-height: 70px;
  border: 2px solid #3b043b;
  border-radius: 10px;
  display: flex;
  text-align: center;
  font-size: 24px;
`;

export const PinResendOption = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #b3b3b3;
  text-align: center;
  margin-bottom: 700px;
`;

export const PinResetLink = styled(Link)`
  color: #740274;
  text-decoration: underline;
  :visited,
  :active {
    color: #740274;
  }
`;
