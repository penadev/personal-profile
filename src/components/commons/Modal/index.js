/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const ModalBase = styled.div`
  display: flex;
  background: #fff;
  min-width: 450px;
  min-height: 450px;
  position: relative;
  flex-direction: column;
  z-index: 200;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

ModalBase.ImgClose = styled.div`
  display: flex;
  border: 1px solid green;
  position: absolute;
  /* margin-left: auto;
  margin-bottom: auto; */
  margin-top: 0px;
  margin-right: 0px;

`;

ModalBase.Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 450px;
  position: absolute;
  z-index: 199;
  justify-content: center;
  align-items: center;
  transition: 1s;
  /* background: #000; */
  ${({ isOpen }) => {
    if (isOpen) {
      return css` 
            opacity: 1;
            pointer-events: all;
            backdrop-filter: grayscale() blur(5px);
        `;
    }

    return css` 
            opacity: 0;
            pointer-events: none;
        `;
  }}
`;

export default function Modal({ isOpen, onClose, children }) {
  return (
    <>
      <ModalBase.Box
        isOpen={isOpen}
        onClick={(event) => {
          const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
          if (!isSafeArea) {
            onClose();
          }
        }}
      >
        {children({
          'data-modal-safe-area': true,
        })}
      </ModalBase.Box>
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
