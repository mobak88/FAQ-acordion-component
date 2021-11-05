import styled from 'styled-components';

export const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.softViolet},
    ${({ theme }) => theme.colors.softBlue}
  );
  width: 100%;
  height: 100vh;
`;
