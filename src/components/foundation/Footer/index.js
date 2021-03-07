import React from 'react';
import styled, { css } from 'styled-components';
import { ReactLogo, NextDotJs } from '@styled-icons/simple-icons';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const FooterBase = styled.div`
  min-height: 65px;
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
      position: fixed;
      bottom: 0;
      justify-content: left;
      margin-top: auto;
    `,
  })}
`;

const FooterBox = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: left;
  align-items: center;
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
`;

const LogoReact = styled(ReactLogo)`
  display: flex;
  width: 30px;
  height: 30px;
  margin-left: auto;
  color: #29d6fd;
`;

const LogoNext = styled(NextDotJs)`
  display: flex;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  color: #29d6fd;
`;

export default function Footer() {
  return (
    <FooterBase>
      <FooterBox>
        Fernando Pena
        <LogoReact />
        <LogoNext />
      </FooterBox>
    </FooterBase>
  );
}
