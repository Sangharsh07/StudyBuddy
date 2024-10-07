import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  padding: 20px 0;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

function Progress() {
  return (
    <ProgressContainer>
      <Title>Your Progress</Title>
      {/* Progress tracking features will be implemented here */}
    </ProgressContainer>
  );
}

export default Progress;