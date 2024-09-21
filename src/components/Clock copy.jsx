import React, { useState, useEffect } from 'react';
import './Clock.css';

const Segment = ({ active, className }) => (
  <div className={`segment ${className} ${active ? 'active' : ''}`} />
);

const Digit = ({ value }) => {
  const segments = [
    [1, 1, 1, 1, 1, 1, 0],  // 0
    [0, 1, 1, 0, 0, 0, 0],  // 1
    [1, 1, 0, 1, 1, 0, 1],  // 2
    [1, 1, 1, 1, 0, 0, 1],  // 3
    [0, 1, 1, 0, 0, 1, 1],  // 4
    [1, 0, 1, 1, 0, 1, 1],  // 5
    [1, 0, 1, 1, 1, 1, 1],  // 6
    [1, 1, 1, 0, 0, 0, 0],  // 7
    [1, 1, 1, 1, 1, 1, 1],  // 8
    [1, 1, 1, 1, 0, 1, 1],  // 9
  ];

  const segmentStates = segments[value] || [0, 0, 0, 0, 0, 0, 0];

  return (
    <div className="digit-container">
      {segmentStates.map((active, index) => (
        <Segment key={index} active={active} className={`segment-${String.fromCharCode(97 + index)}`} />
      ))}
    </div>
  );
};

const Colon = () => (
  <div className="colon-container">
    <div className="colon-dot" />
    <div className="colon-dot" />
  </div>
);

const useCurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return time;
};

const formatDigit = (num) => num.toString().padStart(2, '0');

const Clock = () => {
  const time = useCurrentTime();

  const hours = formatDigit(time.getHours());
  const minutes = formatDigit(time.getMinutes());
  const seconds = formatDigit(time.getSeconds());

  return (
    <div className="clock-container">
      <Digit value={parseInt(hours[0])} />
      <Digit value={parseInt(hours[1])} />
      <Colon />
      <Digit value={parseInt(minutes[0])} />
      <Digit value={parseInt(minutes[1])} />
      <Colon />
      <Digit value={parseInt(seconds[0])} />
      <Digit value={parseInt(seconds[1])} />
    </div>
  );
};

export default Clock;
