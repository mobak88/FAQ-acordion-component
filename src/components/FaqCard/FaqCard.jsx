import WomanOnlineDesktop from '../Illustration/WomanOnlineDesktop';
import Shadow from '../Illustration/Shadow';
import {
  StyledFaqCard,
  StyledFaqs,
  StyledIlustrations,
} from './FaqCard.styled';
import { StyledBackground } from '../Background/Background.styled';

const FaqCard = () => {
  return (
    <StyledBackground>
      <StyledFaqCard>
        <StyledIlustrations>
          <Shadow />
        </StyledIlustrations>
        <StyledFaqs>
          <h1>Test</h1>
        </StyledFaqs>
      </StyledFaqCard>
    </StyledBackground>
  );
};

export default FaqCard;
