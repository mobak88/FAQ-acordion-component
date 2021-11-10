import ArrowDown from '../../Illustration/ArrowDown';
import {
  SyledFaqSection,
  SyledFaqSectionHeading,
  StyledFaqButton,
} from '../FaqCard.styled';

const FaqHeading = (props) => {
  return (
    <SyledFaqSection onClick={props.toggleClick}>
      <SyledFaqSectionHeading>
        <StyledFaqButton active={props.active}>
          {props.children}
        </StyledFaqButton>
        <ArrowDown />
      </SyledFaqSectionHeading>
    </SyledFaqSection>
  );
};

export default FaqHeading;
