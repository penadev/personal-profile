import React from 'react';
import styled from 'styled-components';

const MainBase = styled.div`
  min-height: 60vh;
  background: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* background: url(/images/bg-code-green.svg);
  background-repeat: no-repeat;
  background-position: center; */
`;

export default function Main() {
  return (
    <MainBase>Main</MainBase>
  );
}
