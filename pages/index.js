/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { motion } from 'framer-motion';
import Main from '../src/components/foundation/Main';
import Footer from '../src/components/foundation/Footer';
import Info from '../src/components/foundation/Info';
import Modal, { ModalBase } from '../src/components/commons/Modal';
import MessageForm from '../src/components/forms/MessageForm';

export default function Home() {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isLangPTBR, setLangPTBR] = React.useState(true);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        {(propsModal) => (
          <motion.div
            variants={{
              open: {
                rotate: 0,
                scale: 1,
              },
              closed: {
                rotate: 180,
                scale: 1,
              },
            }}
            initial={{ scale: 180 }}
            animate={isModalOpen ? 'open' : 'closed'}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <ModalBase {...propsModal} isOpen={isModalOpen}>
              <MessageForm
                onClose={() => {
                  setModalOpen(false);
                }}
              />
            </ModalBase>
          </motion.div>
        )}
      </Modal>
      <Info
        isLangPTBR={isLangPTBR}
        onClickMessage={() => setModalOpen(true)}
        onClickLanguage={() => setLangPTBR(!isLangPTBR)}
      />
      <Main />
      <Footer />
    </>
  );
}
