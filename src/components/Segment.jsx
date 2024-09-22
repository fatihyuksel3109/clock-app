import React from 'react';

const Segment = ({ active, className }) => (
  <div className={`segment ${className} ${active ? 'active' : ''}`} />
);

export default Segment;
