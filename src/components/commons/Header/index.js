/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.h1`
    font-size: 20px;
`;

export default function Header() {
  return (
    <HeaderStyle>Fernando Pena</HeaderStyle>
  );
}
