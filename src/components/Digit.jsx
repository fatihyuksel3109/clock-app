import React from 'react';
import Segment from './Segment';

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

  return (
    <div className="digit-container">
      {segments[value].map((active, index) => (
        <Segment key={index} active={active} className={`segment-${String.fromCharCode(97 + index)}`} />
      ))}
    </div>
  );
};

export default Digit;
