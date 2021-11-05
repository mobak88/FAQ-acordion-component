import styled from 'styled-components';

export const StyledFaqCard = styled.div`
  position: relative;
  display: flex;
  background-color: #fff;
  border-radius: 2rem;
  width: 70rem;
  height: 35rem;
  overflow: hidden;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const StyledFaqs = styled.div`
  width: 40%;
`;

export const StyledIlustrations = styled.div`
  width: 35rem;
`;

export const StyledWomanOnlineDesktopDiv = styled.div`
  position: absolute;
  left: -7%;
  top: 10%;
`;

export const StyledShadowDiv = styled.div`
  position: absolute;
  left: -50%;
  top: -50%;
`;

export const StyledBoxDesktopDiv = styled.div`
  position: relative;
  left: 15rem;

  animation: MoveUpDown 1s linear infinite;
  position: absolute;
  left: 0;
  bottom: 0;

  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 0;
    }
    50% {
      bottom: 100px;
    }
  }
`;
