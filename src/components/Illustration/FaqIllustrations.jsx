import React from 'react';

import WomanOnlineDesktop from './WomanOnlineDesktop';
import Shadow from './Shadow';
import {
  StyledIlustrations,
  StyledWomanOnlineDesktopDiv,
  StyledShadowDiv,
} from '../FaqCard/FaqCard.styled';

const FaqIllustrations = () => {
  return (
    <StyledIlustrations>
      <StyledWomanOnlineDesktopDiv>
        <WomanOnlineDesktop />
      </StyledWomanOnlineDesktopDiv>
      <StyledShadowDiv>
        <Shadow />
      </StyledShadowDiv>
    </StyledIlustrations>
  );
};

export default FaqIllustrations;
