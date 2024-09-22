import React from 'react';
import Digit from './Digit';
import Colon from './Colon';

const TimeDisplay = ({ hours, minutes, seconds }) => (
  <>
    <Digit value={parseInt(hours[0])} />
    <Digit value={parseInt(hours[1])} />
    <Colon />
    <Digit value={parseInt(minutes[0])} />
    <Digit value={parseInt(minutes[1])} />
    <Colon />
    <Digit value={parseInt(seconds[0])} />
    <Digit value={parseInt(seconds[1])} />
  </>
);

export default TimeDisplay;
