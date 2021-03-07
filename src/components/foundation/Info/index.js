/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Header from '../../commons/Header';
import Button from '../../commons/Button';
import Icon from '../../commons/Icons';
import InfoWrapper from './styles/InfoWrapper';

export default function Info({ isLangPTBR, onClickMessage, onClickLanguage }) {
  const router = useRouter();

  return (
    <InfoWrapper.Nav>
      <InfoWrapper.Base>
        <InfoWrapper.Box>
          <Header
            isLangPTBR={isLangPTBR}
            onClickLanguage={onClickLanguage}
          />
          <InfoWrapper.HeaderText>
            &quot;Inovação e aprendizado constante&quot;
          </InfoWrapper.HeaderText>
          <InfoWrapper.Links>
            <Link href="https://www.linkedin.com/in/nandopena/">
              <Icon.LgLinkedinMob />
            </Link>
            <Link href="https://github.com/penadev">
              <Icon.LgGitMob />
            </Link>
          </InfoWrapper.Links>
          <InfoWrapper.Text>
            Há mais de 15 anos atuando na área de Tecnologia.
            Atualmente como Arquiteto de Soluções e desenvolvedor full stack senior.
            Com vasta experiência em projetos de grande porte e implementações.
          </InfoWrapper.Text>
          <InfoWrapper.Options>
            <Link href="https://www.linkedin.com/in/nandopena/">
              <Icon.LogoLinkedin />
            </Link>
            <Link href="https://github.com/penadev">
              <Icon.LogoGithub />
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
              isSelected={router.pathname === '/about'}
              onClick={(event) => {
                event.preventDefault();
                router.push('/about');
              }}
            >
              Sobre mim
            </Button>
            <Button
              isSelected={router.pathname === '/skill'}
              onClick={onClickMessage}
            >
              Contato
            </Button>
          </InfoWrapper.Options>
        </InfoWrapper.Box>
      </InfoWrapper.Base>
    </InfoWrapper.Nav>
  );
}

Info.propTypes = {
  isLangPTBR: PropTypes.bool.isRequired,
  onClickMessage: PropTypes.func.isRequired,
  onClickLanguage: PropTypes.func.isRequired,
};
