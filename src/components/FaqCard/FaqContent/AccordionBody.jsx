import React from 'react';
import {
  StyledAccordionBodyContainer,
  StyledAccordionBodyParagraph,
} from './FaqContent.styled';

const AccordionBody = (props) => {
  return (
    <StyledAccordionBodyContainer>
      <StyledAccordionBodyParagraph>
        {props.children}
      </StyledAccordionBodyParagraph>
    </StyledAccordionBodyContainer>
  );
};

export default AccordionBody;
