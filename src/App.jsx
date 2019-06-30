import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import InfoManager from './components/InfoManager';
import { fireworksTick } from './utils';
import HappyBirthday from './components/HappyBirthday';

const App = () => {
  const [userData, setUserData] = useState({});
  const canvas = useRef(null);
  const onSubmit = data => {
    setUserData({ ...userData, ...data });
  };
  useEffect(() => {
    //import loadstate
    if (userData.name && userData.dateOfBirth) {
      const ctx = canvas.current.getContext('2d');
      setInterval(() => fireworksTick(ctx), 16);
    }
  }, [userData.name, userData.dateOfBirth]);
  return (
    <div className="app">
      <InfoManager onSubmit={onSubmit} {...userData} />
      {userData.name && userData.dateOfBirth && (
        <>
          <canvas
            id="canvas"
            height={window.innerHeight}
            ref={canvas}
            width={window.innerWidth}
          />
          <HappyBirthday
            name={userData.name}
            dateOfBirth={userData.dateOfBirth}
          />
        </>
      )}
    </div>
  );
};

export default App;
