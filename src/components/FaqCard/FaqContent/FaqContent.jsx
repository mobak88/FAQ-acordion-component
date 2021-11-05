import React from 'react';

import ArrowDown from '../../Illustration/ArrowDown';
import {
  SyledFaqSection,
  SyledFaqSectionHeading,
  StyledFaqparagrapgh,
} from '../FaqCard.styled';

const FaqHeading = (props) => {
  return (
    <SyledFaqSection>
      <SyledFaqSectionHeading>
        <StyledFaqparagrapgh>{props.children}</StyledFaqparagrapgh>
        <ArrowDown />
      </SyledFaqSectionHeading>
    </SyledFaqSection>
  );
};

export default FaqHeading;

{
  /* <SyledFaqSection>
            <StyledFaqparagrapgh>
              What is the maximum file upload size?
            </StyledFaqparagrapgh>
            <ArrowDown />
          </SyledFaqSection>
          <SyledFaqSection>
            <StyledFaqparagrapgh>
              How do I reset my password?
            </StyledFaqparagrapgh>
            <ArrowDown />
          </SyledFaqSection>
          <SyledFaqSection>
            <StyledFaqparagrapgh>
              Can I cancel my subscription?
            </StyledFaqparagrapgh>
            <ArrowDown />
          </SyledFaqSection>
          <SyledFaqSection>
            <StyledFaqparagrapgh>
              Do you provide additional support?
            </StyledFaqparagrapgh>
            <ArrowDown />
          </SyledFaqSection> */
}
