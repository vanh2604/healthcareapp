import React from 'react';
import './option.scss';
const Option: React.FC = () => {
  return (
    <div className="ml-14">
      <div className="top"></div>
      <div className="mid flex flex-col justify-center items-center">
        <img className="w-14 h-14" src="./assets/icon/icon_knife.svg" />
        <div className="text-white font-normal text-lg">Morning</div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Option;
