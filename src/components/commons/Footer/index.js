import React from 'react';
import styled from 'styled-components';

const FooterBase = styled.div`
  border: 1px solid;
  min-height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <FooterBase>Footer</FooterBase>
  );
}
