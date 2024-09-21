// src/components/Clock.jsx
import React from 'react';
import TimeDisplay from './TimeDisplay';
import useTimer from './useTimer';
import './Clock.css';

const Clock = () => {
  const time = useTimer();

  const formatDigit = (num) => num.toString().padStart(2, '0');
  
  const hours = formatDigit(time.getHours());
  const minutes = formatDigit(time.getMinutes());
  const seconds = formatDigit(time.getSeconds());

  return (
    <div className="clock-container">
      <TimeDisplay hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  );
};

export default Clock;
