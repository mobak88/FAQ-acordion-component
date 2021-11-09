import React, { useState } from 'react';

import AccordionBody from './FaqContent/AccordionBody';
import BoxDesktop from '../Illustration/BoxDesktop';
import FaqHeading from './FaqContent/FaqHeading';
import FaqIllustrations from '../Illustration/FaqIllustrations';
import { StyledFaqs, StyledFaqCard, StyledFaqHeading } from './FaqCard.styled';
import { StyledBackground } from '../Background/Background.styled';
import { FaqText } from './FaqContent/FaqText';

const FaqCard = () => {
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState(false);

  const toggleClick = (index) => {
    if (clicked === index) {
      setClicked(null);
    }
    setClicked(index);
  };

  const toggleActive = (index) => {
    if (active === index) {
      setClicked(false);
    }
    setActive(true);
  };

  const callToggles = (index) => {
    toggleActive(index);
    toggleClick(index);
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
              <React.Fragment key={item.question}>
                <FaqHeading callToggles={() => callToggles(index)}>
                  {item.question}
                </FaqHeading>
                {clicked === index ? (
                  <AccordionBody>{item.answer}</AccordionBody>
                ) : null}
              </React.Fragment>
            );
          })}
        </StyledFaqs>
      </StyledFaqCard>
    </StyledBackground>
  );
};

export default FaqCard;
