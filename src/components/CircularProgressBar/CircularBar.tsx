import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import './circularbar.scss';
const CircularBar: React.FC = () => {
  return (
    <div className="circular-bar">
      <CircularProgressbarWithChildren
        value={70}
        strokeWidth={1}
        styles={buildStyles({ trailColor: 'transparent', pathColor: '#FFFFFF' })}
      >
        <span style={{ fontSize: '25px', color: '#FFFFFF' }}>
          <span style={{ fontSize: '18px', color: '#FFFFF' }}>05/21</span> / 70%
        </span>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularBar;
