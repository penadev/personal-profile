import React from 'react';
import styled from 'styled-components';

const HeaderBase = styled.div`
    border: 2px solid;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    min-height: 5vh;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    padding: 10px;
    padding-bottom: 3px;
`;

const HeaderName = styled.div`
    display: flex;
    font-family: ${({ theme }) => theme.fontFamilyLogo};
    font-size: 36px;
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
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
  display: flex;
  margin-left: auto;
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
      <HeaderText>"Inovação e aprendizado constante"</HeaderText>
      <HeaderLanguages>
        <HeaderImg src="/images/brasil.png" />
        <HeaderImg src="/images/united-states.png" />
      </HeaderLanguages>
    </HeaderBase>
  );
}
