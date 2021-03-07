import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

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

export default Button;
