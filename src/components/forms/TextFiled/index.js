import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function handleBlur(event) {
  const fieldName = event.target.getAttribute('name');
  // eslint-disable-next-line no-console
  console.log(fieldName);
}

const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  min-width: 300px;
  border: 1px solid;
  padding: 12px 16px;
  outline: 0;
  border-radius: 10px;
`;

export default function TextField({
  placeholder,
  name,
  onChange,
  onBlur,
  value,
}) {
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </InputWrapper>
  );
}

TextField.defaultProps = {
  onBlur: handleBlur,
};

TextField.propTypes = {
  onBlur: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
