/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const InfoBase = styled.div`
  /* border: 1px solid; */
  min-height: 20vh;
  min-width: 450px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
  /* background: url(/images/bg-code-blue.svg); */
  /* background-repeat: no-repeat;
  background-position: center; */
  background: linear-gradient(270deg, #000000 12.39%, rgba(0, 0, 0, 0) 50%), url(/images/bg-code-blue.svg);
  /* background: url(/images/bg_personal.png);
  background-repeat: no-repeat;
  background-position: left;
  opacity: 0.5; */
`;

const InfoLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 0px;
  padding: 20px;
  ${breakpointsMedia({
    md: css`
      padding: 0px;
      margin-left: auto;
    `,
  })}
  /* margin-bottom: auto; */
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-bottom: auto;
  margin-top: auto;
  max-width: 530px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 20px;
  ${breakpointsMedia({
    md: css`
      margin-right: 0;
      padding-bottom: 0;
      text-align: right;
    `,
  })}
`;

const InfoImg = styled.img`
  margin-left: 10px;
  max-width: 30px;
  max-height: 30px;
  cursor: pointer;
`;

const InfoOptions = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 30px;
  width: 100%;
  padding: 5px;
`;

const InfoOptionsRight = styled(InfoOptions)`
  display: flex;
  margin-left: auto;
  max-width: 400px;
  padding: 0px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: 130px;
  min-height: 30px;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fontFamilyButton};
  color: ${({ theme }) => theme.colors.button.primary.contrastText};
  background: ${({ theme }) => theme.colors.button.primary.bgcolor};
  transition: opacity ${({ theme }) => theme.transition};
  border: 0px;
  font-weight: 700;
  padding-left: 5px;
  :hover{
    color: ${({ theme }) => theme.colors.button.primary.contrastText};
    background: ${({ theme }) => theme.colors.button.primary.bgcolor};
    font-weight: 700;
  }
  ${breakpointsMedia({
    md: css`
      min-width: 180px;
      padding: 0px;
    `,
  })}
`;

const ButtonRight = styled(Button)`
  color: ${({ theme }) => theme.colors.button.secondary.contrastText};
  background: ${({ theme }) => theme.colors.button.secondary.bgcolor};
  font-weight: 400;
  margin-left: auto;
  padding-left: 10px;
`;

const HeaderLanguages = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.4;
  ${breakpointsMedia({
    md: css`
      display: none;
      margin-right: 0;
    `,
  })}
`;

export default function Info() {
  return (
    <InfoBase>
      <InfoLinks>
        <a href="https://github.com/penadev" target="_blank">
          <InfoImg src="/images/github-sign_gray.png" />
        </a>
        <a href="https://www.linkedin.com/in/nandopena/" target="_blank">
          <InfoImg src="/images/linkedin_gray.png" />
        </a>
        <HeaderLanguages>
          <InfoImg src="/images/brasil.png" />
          <InfoImg src="/images/united-states.png" />
        </HeaderLanguages>
      </InfoLinks>
      <InfoText>
        Há mais de 15 anos atuando na área de Tecnologia.
        Atualmente como Arquiteto de Soluções e desenvolvedor full stack senior.
        Com vasta experiência em projetos de grandes porte e  implementação.
      </InfoText>
      <InfoOptions>
        <Button>Portifólio</Button>
        <InfoOptionsRight>
          <ButtonRight>Skills</ButtonRight>
          <ButtonRight>Sobre mim</ButtonRight>
        </InfoOptionsRight>
      </InfoOptions>
    </InfoBase>
  );
}
