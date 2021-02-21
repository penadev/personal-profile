import React from 'react';
import styled from 'styled-components';

const MainBase = styled.div`
  min-height: 50vh;
  background: #121212;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px;
  /* background: url(/images/bg-code-green.svg);
  background-repeat: no-repeat;
  background-position: center; */
`;

export default function About() {
  return (
    <MainBase />
  );
}
