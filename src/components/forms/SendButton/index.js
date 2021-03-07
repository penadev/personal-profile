import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: 130px;
  min-height: 40px;
  width: 100%;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fontFamilyButton};
  color: ${({ theme }) => theme.colors.button.primary.contrastText};
  background: ${({ theme }) => theme.colors.button.primary.bgcolor};
  font-weight: 700;
  border: 2px solid ${({ theme }) => theme.colors.button.primary.bgcolor};
  ${breakpointsMedia({
    md: css`
      min-width: 180px;
      padding: 0px;
    `,
  })}
  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};
`;

export default SendButton;
