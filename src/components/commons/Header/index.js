import React from 'react';
import styled from 'styled-components';

const HeaderBase = styled.div`
    border: 1px solid;
    min-height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Header() {
  return (
    <HeaderBase>Fernando Pena</HeaderBase>
  );
}
