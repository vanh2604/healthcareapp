import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import './circularbar.scss';
import { IArchivementRate } from '../../interfaces/meal';

interface CircularBarProps {
  archivementRate?: IArchivementRate;
}

const CircularBar: React.FC<CircularBarProps> = (props) => {
  const { archivementRate } = props;
  return (
    <div className="circular-bar">
      <CircularProgressbarWithChildren
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        value={archivementRate?.rate}
        strokeWidth={1}
        styles={buildStyles({ trailColor: 'transparent', pathColor: '#FFFFFF' })}
      >
        <span style={{ fontSize: '25px', color: '#FFFFFF' }}>
          <span style={{ fontSize: '18px', color: '#FFFFF' }}>{archivementRate?.date}</span> /{' '}
          {archivementRate?.rate}%
        </span>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularBar;
