import ArrowDown from '../../Illustration/ArrowDown';
import {
  SyledFaqSection,
  SyledFaqSectionHeading,
  StyledFaqparagrapgh,
} from '../FaqCard.styled';

const FaqHeading = (props) => {
  return (
    <SyledFaqSection onClick={props.toggleClick}>
      <SyledFaqSectionHeading>
        <StyledFaqparagrapgh>{props.children}</StyledFaqparagrapgh>
        <ArrowDown />
      </SyledFaqSectionHeading>
    </SyledFaqSection>
  );
};

export default FaqHeading;
