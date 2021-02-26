import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import db from '../../../../db.json';

const MainBase = styled.div`
  min-height: 50vh;
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
  /* background: url(/images/bg-code-green.svg);
  background-repeat: no-repeat;
  background-position: center; */
`;

export default function Main() {
  return (
    <MainBase>
      {db.portifolio.map((portifolio) => {
        const imgSrc = '/images/mais.png';
        return (
          <Card key={portifolio.key}>
            <Card.Image backgroundImage={portifolio.image}>
              <Card.Skill>
                {portifolio.skill}
              </Card.Skill>
            </Card.Image>
            {portifolio.text}
            <Card.Others src={imgSrc} />
          </Card>
        );
      })}
    </MainBase>
  );
}
