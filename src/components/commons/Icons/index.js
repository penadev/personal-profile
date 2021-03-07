import styled, { css } from 'styled-components';
import { Github, Linkedin } from '@styled-icons/simple-icons';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const Icon = styled.div`
  display: none;
  width: 30px;
  height: 30px;
`;

Icon.LogoGithub = styled(Github)`
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

Icon.LogoLinkedin = styled(Linkedin)`
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

Icon.LgLinkedinMob = styled(Icon.LogoLinkedin)`
  display: flex;
`;

Icon.LgGitMob = styled(Icon.LogoGithub)`
  display: flex;
`;

export default Icon;
