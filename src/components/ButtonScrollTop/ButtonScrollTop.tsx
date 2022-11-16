import React from 'react';
import './buttonscrolltop.scss';
const ButtonScrollTop: React.FC = () => {
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div onClick={scrollTop} className="btn-scroll-top flex flex-row justify-center items-center">
      <img alt="" src="./assets/icon/chevon.svg"></img>
    </div>
  );
};

export default ButtonScrollTop;
