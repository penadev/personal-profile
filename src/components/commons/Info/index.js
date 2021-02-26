/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Github, Linkedin } from '@styled-icons/simple-icons';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import Header from '../Header';

const InfoBase = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0px calc(100% - 50px));
  padding-bottom: 50px;
  background: url(/images/bg-code-blue.png), #161616;
`;

const InfoBox = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  min-height: 25vh;
  min-width: 450px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-bottom: 5px;
  padding-top: 5px;
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
      display: none;
    `,
  })}
  color: #717171;
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

const HeaderText = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.secondary.main.contrastText};
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  ${breakpointsMedia({
    md: css`
      margin-left: auto;
      margin-right: 0px;
    `,
  })}
`;

// const InfoImg = styled.img`
//   margin-left: 10px;
//   max-width: 30px;
//   max-height: 30px;
//   cursor: pointer;
// `;

const InfoOptions = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 30px;
  width: 100%;
  padding: 5px;
  justify-content: flex-end;
  color: #717171;
`;

const selectedButton = css`
  color: ${({ theme }) => theme.colors.button.primary.contrastText};
  background: ${({ theme }) => theme.colors.button.primary.bgcolor};
  font-weight: 700;
`;

const unselectedButton = css`
  color: ${({ theme }) => theme.colors.button.secondary.contrastText};
  background: ${({ theme }) => theme.colors.button.secondary.bgcolor};
  font-weight: 400;
`;

const Button = styled.div`
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
  border: 2px solid ${({ theme }) => theme.colors.button.primary.bgcolor};
  padding-left: 5px;
  margin-left: 10px;
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
  ${({ isSelected }) => (isSelected ? selectedButton : unselectedButton)}
`;

const Nav = styled.nav`
  filter: drop-shadow(0 9px 4px rgba(0, 0, 0, 0.3));
`;

const LogoGithub = styled(Github)`
  display: none;
  width: 30px;
  height: 30px;
  margin-right: auto;
  cursor: pointer;
  ${breakpointsMedia({
    md: css`
      display: flex;
    `,
  })}
`;

const LogoLinkedin = styled(Linkedin)`
  display: none;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
  ${breakpointsMedia({
    md: css`
      display: flex;
    `,
  })}
`;

const LgLinkedinMob = styled(LogoLinkedin)`
  display: flex;
`;

const LgGitMob = styled(LogoGithub)`
  display: flex;
`;

export default function Info() {
  const router = useRouter();

  return (
    <Nav>
      <InfoBase>
        <InfoBox>
          <Header />
          <HeaderText>&quot;Inovação e aprendizado constante&quot;</HeaderText>
          <InfoLinks>
            <Link href="https://www.linkedin.com/in/nandopena/">
              <LgLinkedinMob />
            </Link>
            <Link href="https://github.com/penadev">
              <LgGitMob />
            </Link>
          </InfoLinks>
          <InfoText>
            Há mais de 15 anos atuando na área de Tecnologia.
            Atualmente como Arquiteto de Soluções e desenvolvedor full stack senior.
            Com vasta experiência em projetos de grande porte e implementações.
          </InfoText>
          <InfoOptions>
            <Link href="https://www.linkedin.com/in/nandopena/">
              <LogoLinkedin />
            </Link>
            <Link href="https://github.com/penadev">
              <LogoGithub />
            </Link>
            <Button
              isSelected={router.pathname === '/'}
              onClick={(event) => {
                event.preventDefault();
                router.push('/');
              }}
            >
              Portifólio
            </Button>
            <Button
              isSelected={router.pathname === '/skill'}
              onClick={() => router.replace('/skill')}
            >
              Skills
            </Button>
            <Button
              isSelected={router.pathname === '/about'}
              onClick={() => router.replace('/about')}
            >
              Sobre mim
            </Button>
          </InfoOptions>
        </InfoBox>
      </InfoBase>
    </Nav>
  );
}
