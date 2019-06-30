import React, { useState } from 'react';
import './InputField.css';

const InputField = ({
  id,
  onSubmit: onFormSubmit,
  type = 'text',
  initialValue = ''
}) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => setValue(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    onFormSubmit({ [id]: value });
  };

  return (
    <form className="input-form" onSubmit={onSubmit}>
      <input
        className="input-field"
        onChange={onChange}
        placeholder={
          id === 'name' ? 'Type your name here' : 'Pick your birth date'
        }
        type={type}
        value={value}
      />
      <input className="submit-btn" type="submit" value="Ok" />
    </form>
  );
};

export default InputField;
