import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const HeaderBase = styled.div`
  border: 0;  
  min-height: 5vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: center;
  padding: 0px;
  padding-bottom: 3px;
  ${breakpointsMedia({
    md: css`
      /* border: 2px solid;
      border-top: 0;
      border-left: 0;
      border-right: 0; */
      `,
  })}
`;

const HeaderName = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fontFamilyLogo};
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  margin-left: auto;
  margin-right: auto;
  ${breakpointsMedia({
    md: css`
      margin-left: 0;
      margin-right: 0;
    `,
  })}
`;

const HeaderColor = styled.span`
  color: ${({ theme }) => theme.colors.secondary.main.contrastText};
  margin-left: 10px;
`;

const HeaderText = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
  margin-right: auto;
  margin-left: auto;
`;

const HeaderLanguages = styled.div`
  display: none;
  margin-left: auto;
  margin-right: auto;
  ${breakpointsMedia({
    md: css`
      display: flex;
      margin-right: 0;
    `,
  })}
`;

const HeaderImg = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;

export default function Header() {
  return (
    <HeaderBase>
      <HeaderName>
        FERNANDO
        <HeaderColor>
          PENA
        </HeaderColor>
      </HeaderName>
      <HeaderText>&quot;Inovação e aprendizado constante&quot;</HeaderText>
      <HeaderLanguages>
        <HeaderImg src="/images/brasil.png" />
        <HeaderImg src="/images/united-states.png" />
      </HeaderLanguages>
    </HeaderBase>
  );
}
