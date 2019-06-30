import React from 'react';
import InfoCollector from '../InfoCollector/Index';
import './InfoManager.css';

const NameText = props => (
  <div className="info-collector-text">
    <span role="img" aria-label="Birthday Cake">
      🎂
    </span>
    Welcome-uh... What is your name Again?
    <span role="img" aria-label="Birthday Shortcake">
      🍰
    </span>
  </div>
);

const BirthDateText = props => (
  <div className="info-collector-text">
    <span role="img" aria-label="Birthday Gift">
      🎁
    </span>
    Brilliant, {props.name}! And when were you born?
    <span role="img" aria-label="Birthday Date">
      📅
    </span>
  </div>
);

const InfoManager = props => (
  <>
    <InfoCollector
      id="name"
      onSubmit={props.onSubmit}
      open={!props.name}
      text={<NameText />}
    />
    <InfoCollector
      id="dateOfBirth"
      onSubmit={props.onSubmit}
      open={props.name && !props.dateOfBirth}
      text={<BirthDateText name={props.name} />}
      type="date"
    />
  </>
);

export default InfoManager;
