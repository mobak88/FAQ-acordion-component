import WomanOnlineDesktop from '../Illustration/WomanOnlineDesktop';
import Shadow from '../Illustration/Shadow';
import BoxDesktop from '../Illustration/BoxDesktop';
import {
  StyledFaqCard,
  StyledFaqs,
  StyledIlustrations,
  StyledWomanOnlineDesktopDiv,
  StyledShadowDiv,
} from './FaqCard.styled';
import { StyledBackground } from '../Background/Background.styled';

const FaqCard = () => {
  return (
    <StyledBackground>
      <BoxDesktop />
      <StyledFaqCard>
        <StyledIlustrations>
          <StyledWomanOnlineDesktopDiv>
            <WomanOnlineDesktop />
          </StyledWomanOnlineDesktopDiv>
          <StyledShadowDiv>
            <Shadow />
          </StyledShadowDiv>
        </StyledIlustrations>
        <StyledFaqs>
          <h1>Test</h1>
        </StyledFaqs>
      </StyledFaqCard>
    </StyledBackground>
  );
};

export default FaqCard;
