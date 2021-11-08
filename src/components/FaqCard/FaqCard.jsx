import { useState } from 'react';

import AccordionBody from './FaqContent/AccordionBody';
import BoxDesktop from '../Illustration/BoxDesktop';
import FaqContent from './FaqContent/FaqContent';
import FaqIllustrations from '../Illustration/FaqIllustrations';
import { StyledFaqs, StyledFaqCard, StyledFaqHeading } from './FaqCard.styled';
import { StyledBackground } from '../Background/Background.styled';
import { FaqText } from './FaqContent/FaqText';

const FaqCard = (props) => {
  const [clicked, setClicked] = useState(false);

  const toggleClick = (id) => {
    if (clicked === false) setClicked(true);

    if (clicked === true) setClicked(false);
  };

  return (
    <StyledBackground>
      <BoxDesktop />
      <StyledFaqCard>
        <FaqIllustrations />
        <StyledFaqs>
          <StyledFaqHeading>FAQ</StyledFaqHeading>
          <FaqContent toggleClick={toggleClick}>
            How many team members can I invite?
          </FaqContent>
          <AccordionBody>
            {clicked === true
              ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            rem voluptas, repellat molestias earum voluptatum fugit
            exercitationem!`
              : null}
          </AccordionBody>
          <FaqContent toggleClick={toggleClick}>
            What is the maximum file upload size?
          </FaqContent>
          <AccordionBody>
            {clicked === true
              ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            rem voluptas, repellat molestias earum voluptatum fugit
            exercitationem!`
              : null}
          </AccordionBody>
          <FaqContent toggleClick={toggleClick}>
            How do I reset my password?
          </FaqContent>
          <AccordionBody>
            {clicked === true
              ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            rem voluptas, repellat molestias earum voluptatum fugit
            exercitationem!`
              : null}
          </AccordionBody>
          <FaqContent toggleClick={toggleClick}>
            Can I cancel my subscription?
          </FaqContent>
          <AccordionBody>
            {clicked === true
              ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            rem voluptas, repellat molestias earum voluptatum fugit
            exercitationem!`
              : null}
          </AccordionBody>
          <FaqContent toggleClick={toggleClick}>
            Do you provide additional support?
          </FaqContent>
          <AccordionBody>
            {clicked === true
              ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            rem voluptas, repellat molestias earum voluptatum fugit
            exercitationem!`
              : null}
          </AccordionBody>
        </StyledFaqs>
      </StyledFaqCard>
    </StyledBackground>
  );
};

export default FaqCard;
