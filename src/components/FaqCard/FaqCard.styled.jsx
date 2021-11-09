import styled from 'styled-components';

export const StyledFaqCard = styled.div`
  position: relative;
  right: 6rem;
  display: flex;
  background-color: #fff;
  border-radius: 2rem;
  width: 70rem;
  height: 35rem;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const StyledFaqs = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 3rem 0 0 0;
`;

export const StyledIlustrations = styled.div`
  width: 35rem;
`;

export const StyledWomanOnlineDesktopDiv = styled.div`
  position: absolute;
  left: -7%;
  top: 10%;
  z-index: 1;
`;

export const StyledShadowDiv = styled.div`
  position: absolute;
  left: -51%;
  top: -50%;
`;

export const StyledBoxDesktopDiv = styled.div`
  position: relative;
  right: 1.5rem;
  top: 0.5rem;
  z-index: 2;

  animation: action 1s infinite alternate;

  @keyframes action {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`;

export const StyledFaqHeading = styled.h1`
  color: ${({ theme }) => theme.colors.veryDarkDesaturatedBlue};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const SyledFaqSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`;

export const SyledFaqSectionHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrayishBlue};
`;

export const StyledFaqButton = styled.button`
  font-size: 1rem;
  padding: 1.4rem 0 1.4rem 0;
  background: none;
  border: none;
  cursor: pointer;
  transition: ease-in-out color 200ms;
  color: ${({ theme }) => theme.colors.veryDarkGrayishBlue};
  font-weight: ${(active) => (active ? '' : 700)};

  &:hover {
    color: ${({ theme }) => theme.colors.softRed};
  }
`;
