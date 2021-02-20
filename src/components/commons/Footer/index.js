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
  margin-top: auto;
  padding: 5px;
  /* position: absolute;
  bottom: 0;
  max-width: 1366px;
  width: 100%; */
  ${breakpointsMedia({
    md: css`
      justify-content: left;
    `,
  })}
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
