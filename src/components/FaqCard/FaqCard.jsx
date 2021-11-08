import { useState } from 'react';

import AccordionBody from './FaqContent/AccordionBody';
import BoxDesktop from '../Illustration/BoxDesktop';
import FaqHeading from './FaqContent/FaqHeading';
import FaqIllustrations from '../Illustration/FaqIllustrations';
import { StyledFaqs, StyledFaqCard, StyledFaqHeading } from './FaqCard.styled';
import { StyledBackground } from '../Background/Background.styled';
import { FaqText } from './FaqContent/FaqText';

const FaqCard = () => {
  const [clicked, setClicked] = useState(false);

  const toggleClick = (index) => {
    if (clicked === index) {
      setClicked(null);
      console.log(index);
    }
    setClicked(index);
  };

  return (
    <StyledBackground>
      <BoxDesktop />
      <StyledFaqCard>
        <FaqIllustrations />
        <StyledFaqs>
          <StyledFaqHeading>FAQ</StyledFaqHeading>
          {FaqText.map((item, index) => {
            return (
              <>
                <FaqHeading toggleClick={() => toggleClick(index)} key={index}>
                  {item.question}
                </FaqHeading>
                {clicked === index ? (
                  <AccordionBody>{item.answer}</AccordionBody>
                ) : null}
              </>
            );
          })}
        </StyledFaqs>
      </StyledFaqCard>
    </StyledBackground>
  );
};

export default FaqCard;
