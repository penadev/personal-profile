import React from 'react';
import styled from 'styled-components';

const FooterBase = styled.div`
  min-height: 5vh;
  display: flex;
  font-family: ${({ theme }) => theme.fontFamilyFooter};
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  font-size: 48px;
  justify-content: left;
  align-items: center;
  padding: 5px;
`;

const FooterLogo = styled.img`
  font-family: ${({ theme }) => theme.fontFamily};
  margin-left: auto;
  max-height: 50px;
`;

export default function Footer() {
  return (
    <FooterBase>
      Fernando Pena
      <FooterLogo src="/images/react-next.png" max-height="50px" margin-left="auto" />
    </FooterBase>
  );
}
