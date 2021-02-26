import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const FooterBase = styled.div`
  min-height: 5vh;
  display: flex;
  font-family: ${({ theme }) => theme.fontFamilyFooter};
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  font-size: 48px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px;  
  margin-bottom: 0px;
  width: 100%;
  background: url(/images/bg-code-blue.png), #161616;
  ${breakpointsMedia({
    md: css`
      justify-content: left;
      margin-top: auto;
      position: absolute;
      bottom: 0;
    `,
  })}
`;

const FooterLogo = styled.img`
  font-family: ${({ theme }) => theme.fontFamily};
  margin-left: auto;
  max-height: 50px;
`;

const FooterBox = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export default function Footer() {
  return (
    <FooterBase>
      <FooterBox>
        Fernando Pena
        <FooterLogo src="/images/react-next.png" max-height="50px" margin-left="auto" />
      </FooterBox>
    </FooterBase>
  );
}
