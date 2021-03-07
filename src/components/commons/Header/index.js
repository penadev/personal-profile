import React from 'react';
import PropTypes from 'prop-types';
import HeaderWrapper from './HeaderWrapper';

export default function Header({ isLangPTBR, onClickLanguage }) {
  return (
    <HeaderWrapper.Base>
      <HeaderWrapper.Name>
        FERNANDO
        <HeaderWrapper.Color>
          PENA
        </HeaderWrapper.Color>
      </HeaderWrapper.Name>
      <HeaderWrapper.Languages>
        {isLangPTBR && <HeaderWrapper.Img src="/images/united-states.png" onClick={onClickLanguage} />}
        {!isLangPTBR && <HeaderWrapper.Img src="/images/brasil.png" onClick={onClickLanguage} />}
      </HeaderWrapper.Languages>
    </HeaderWrapper.Base>
  );
}

Header.propTypes = {
  isLangPTBR: PropTypes.bool.isRequired,
  onClickLanguage: PropTypes.func.isRequired,
};
