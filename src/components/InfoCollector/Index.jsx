import React from 'react';
import Overlay from '../Overlay';
import InputField from '../InputField';

const InfoCollector = props => {
  return (
    <Overlay open={props.open}>
      {props.text}
      <InputField id={props.id} onSubmit={props.onSubmit} type={props.type} />
    </Overlay>
  );
};

export default InfoCollector;
