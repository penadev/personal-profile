import React from 'react';
import styled from 'styled-components';

const MainBase = styled.div`
  border: 1px solid;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Main() {
  return (
    <MainBase>Main</MainBase>
  );
}
