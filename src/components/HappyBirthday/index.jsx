import React from 'react';
import './HappyBirthday.css';

const HappyBirthday = props => (
  <div className="happy-birthday">
    <span role="img" aria-label="Confetti Ball">
      🎊
    </span>
    <h1>
      Happy Birthday,{' '}
      {props.name[0].toUpperCase() + props.name.slice(1).toLowerCase()}
    </h1>
    <span role="img" aria-label="Party Popper">
      🎉
    </span>
  </div>
);

// TODO: message for non-birthday days, button to reset user, counter for how many days till the next birthday

export default HappyBirthday;
