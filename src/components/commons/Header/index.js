import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const HeaderBase = styled.div`
  border: 0;  
  min-height: 5vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0px;
  padding-bottom: 3px;
`;

const HeaderName = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fontFamilyLogo};
  font-size: 42px;
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  ${breakpointsMedia({
    md: css`
      font-size: 48px;
      margin-left: 0;
      margin-right: 0;
    `,
  })}
`;

const HeaderColor = styled.span`
  color: ${({ theme }) => theme.colors.secondary.main.contrastText};
  margin-left: 10px;
`;

const HeaderLanguages = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  align-items: center;
  opacity: 0.4;
  ${breakpointsMedia({
    md: css`
      position: relative;
      display: flex;
      margin-left: auto;
      padding-right: 0px;
      right: 0;
      opacity: 0.6;
    `,
  })}
`;

const HeaderImg = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;

export default function Header() {
  const [isLangPTBR, setLang] = React.useState(true);

  return (
    <HeaderBase>
      <HeaderName>
        FERNANDO
        <HeaderColor>
          PENA
        </HeaderColor>
      </HeaderName>
      <HeaderLanguages>
        {isLangPTBR && <HeaderImg src="/images/united-states.png" onClick={() => setLang(!isLangPTBR)} />}
        {!isLangPTBR && <HeaderImg src="/images/brasil.png" onClick={() => setLang(!isLangPTBR)} />}
      </HeaderLanguages>
    </HeaderBase>
  );
}
