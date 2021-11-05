import AccordionBody from './FaqContent/AccordionBody';
import BoxDesktop from '../Illustration/BoxDesktop';
import FaqContent from './FaqContent/FaqContent';
import FaqIllustrations from '../Illustration/FaqIllustrations';
import {
  StyledFaqs,
  StyledFaqCard,
  StyledFaqHeading,
  SyledFaqSection,
} from './FaqCard.styled';
import { StyledBackground } from '../Background/Background.styled';

const FaqCard = () => {
  return (
    <StyledBackground>
      <BoxDesktop />
      <StyledFaqCard>
        <FaqIllustrations />
        <StyledFaqs>
          <StyledFaqHeading>FAQ</StyledFaqHeading>
          <SyledFaqSection>
            <FaqContent>How many team members can I invite?</FaqContent>
            <AccordionBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              rem voluptas, repellat molestias earum voluptatum fugit
              exercitationem!
            </AccordionBody>
          </SyledFaqSection>
        </StyledFaqs>
      </StyledFaqCard>
    </StyledBackground>
  );
};

export default FaqCard;
