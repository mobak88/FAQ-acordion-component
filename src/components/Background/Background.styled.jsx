import styled from 'styled-components';

export const StyledBackground = styled.div`
  background-image: linear-gradient(
    ${(props) => props.theme.colors.StyledBackground.softViolet},
    ${(props) => props.theme.colors.StyledBackground.softBlue}
  );
  width: 100vw;
  height: 100vh;
`;
