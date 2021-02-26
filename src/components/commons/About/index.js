import React from 'react';
import styled from 'styled-components';

const MainBase = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  background: ${({ theme }) => theme.colors.background.main.color};
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
`;

const MainText = styled.div`
  margin-left: 35px;
  min-width: 100%;
  font-family: ${({ theme }) => theme.fontFamilyLogo};
  font-size: 24px;
  font-weight: 400;
  color: #606060;
`;

export default function About() {
  return (
    <MainBase>
      <MainText>Sobre mim</MainText>
    </MainBase>
  );
}
