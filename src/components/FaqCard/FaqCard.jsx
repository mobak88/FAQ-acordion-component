import React, { useState } from 'react';

import AccordionBody from './FaqContent/AccordionBody';
import BoxDesktop from '../Illustration/BoxDesktop';
import FaqHeading from './FaqContent/FaqHeading';
import FaqIllustrations from '../Illustration/FaqIllustrations';
import { StyledFaqs, StyledFaqCard, StyledFaqHeading } from './FaqCard.styled';
import { StyledBackground } from '../Background/Background.styled';
import { FaqText } from './FaqContent/FaqText';

const FaqCard = () => {
  const [clicked, setClicked] = useState([]);

  const toggleClick = (index) => {
    if (clicked.includes(index)) {
      setClicked((clicked) => clicked.filter((el) => el !== index));
    } else {
      setClicked((clicked) => [...clicked, index]);
    }
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
                <FaqHeading
                  toggleClick={() => toggleClick(index)}
                  active={clicked.includes(index)}
                >
                  {item.question}
                </FaqHeading>
                {clicked.includes(index) && (
                  <AccordionBody>{item.answer}</AccordionBody>
                )}
              </React.Fragment>
            );
          })}
        </StyledFaqs>
      </StyledFaqCard>
    </StyledBackground>
  );
};

export default FaqCard;
