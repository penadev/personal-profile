import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Card from '../../commons/Card';
import db from '../../../../db.json';

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

MainBase.Text = styled.div`
  margin-left: 35px;
  min-width: 100%;
  font-family: ${({ theme }) => theme.fontFamilyLogo};
  font-size: 24px;
  font-weight: 400;
  color: #606060;
`;

export default function Main() {
  return (
    <MainBase>
      <MainBase.Text>Projetos</MainBase.Text>
      {db.portifolio.map((portifolio) => {
        const imgSrc = '/images/mais.png';
        return (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={portifolio.key}
          >
            <Card key={portifolio.key}>
              <Card.Image backgroundImage={portifolio.image}>
                <Card.Skill>
                  {portifolio.skill}
                </Card.Skill>
              </Card.Image>
              {portifolio.text}
              <Card.Others src={imgSrc} />
            </Card>
          </motion.div>
        );
      })}
    </MainBase>
  );
}
