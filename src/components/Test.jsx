import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: ${(softRed) => softRed};
  font-size: 40px;
`;

const Test = () => {
  return <StyledH1>Test</StyledH1>;
};

export default Test;
