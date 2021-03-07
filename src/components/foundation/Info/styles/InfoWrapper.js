import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const InfoWrapper = {};

InfoWrapper.Base = styled.div`
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

InfoWrapper.Box = styled.div`
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

InfoWrapper.Links = styled.div`
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

InfoWrapper.Text = styled.div`
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

InfoWrapper.HeaderText = styled.div`
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

InfoWrapper.Options = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 30px;
  width: 100%;
  padding: 5px;
  justify-content: flex-end;
  color: #717171;
`;

InfoWrapper.Nav = styled.nav`
  filter: drop-shadow(0 9px 4px rgba(0, 0, 0, 0.3));
`;

export default InfoWrapper;
