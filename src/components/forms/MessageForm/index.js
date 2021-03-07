import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SendButton from '../SendButton';
import TextBox from '../TextBox';
import TextField from '../TextFiled';
import errorAnimation from '../animation/error.json';
import okAnimation from '../animation/success-animation.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const SpanError = styled.span`
  color: red;
`;

const SendStatus = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  z-index: 250;
`;

function FormContent({ onClose }) {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const [userInfo, setUserInfo] = useState({
    nome: '',
    email: '',
    textbox: '',
  });

  function resetValues() {
    setUserInfo({
      nome: '',
      email: '',
      textbox: '',
    });
    setIsFormSubmited(false);
    setSubmissionStatus(formStates.DEFAULT);
    setTouched({});
    setErrors({});
  }

  const errorOptions = {
    loop: true,
    autoplay: true,
    animationData: errorAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const okOptions = {
    loop: false,
    autoplay: true,
    animationData: okAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  function validate(values) {
    const error = {};

    if (!values.email.includes('@')) {
      error.email = 'Inserir e-mail válido';
    }
    return error;
  }

  useEffect(() => {
    setErrors(validate(userInfo));
  }, [userInfo]);

  function handleBlur(event) {
    const fieldName = event.target.getAttribute('name');
    setTouched({
      ...userInfo,
      [fieldName]: 'true',
    });
  }

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = (
    userInfo.nome.length === 0
    || userInfo.email.length === 0
    || userInfo.textbox.length === 0
  );

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      setErrors(validate(userInfo));
      setIsFormSubmited(true);

      // Data Transfer Object
      const userDTO = {
        name: userInfo.nome,
        email: userInfo.email,
        message: userInfo.textbox,
      };

      fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDTO),
      })
        .then((respostaDoServidor) => {
          if (respostaDoServidor.ok) {
            return respostaDoServidor.json();
          }

          throw new Error('Não foi possível enviar a mensagem :(');
        })
        .then((respostaConvertidaEmObjeto) => {
          setSubmissionStatus(formStates.DONE);
          // eslint-disable-next-line no-console
          console.log(respostaConvertidaEmObjeto);
        })
        .catch((error) => {
          setSubmissionStatus(formStates.ERROR);
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }}
    >
      <TextField
        placeholder="Nome"
        name="nome"
        value={userInfo.nome}
        onChange={handleChange}
      />
      {errors.email && touched.email && <SpanError className="fieldError">{errors.email}</SpanError>}
      <TextField
        placeholder="E-mail"
        name="email"
        value={userInfo.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextBox
        placeholder="Sua mensagem aqui..."
        name="textbox"
        value={userInfo.textbox}
        onChange={handleChange}
      />
      <SendButton
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Enviar
      </SendButton>
      {isFormSubmited && submissionStatus === formStates.DONE && (
        <SendStatus
          onClick={() => {
            resetValues();
            onClose();
          }}
        >
          <Lottie
            width="300px"
            height="300px"
            options={okOptions}
          />
        </SendStatus>
      )}
      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <SendStatus
          onClick={() => {
            resetValues();
            onClose();
          }}
        >
          <Lottie
            width="300px"
            height="300px"
            options={errorOptions}
          />
        </SendStatus>
      )}
    </form>
  );
}

export default function MessageForm({ onClose }) {
  return (
    <FormContent onClose={onClose} />
  );
}

MessageForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

FormContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};
