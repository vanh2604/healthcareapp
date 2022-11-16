import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { PATH } from '../../routes/constants';
const Navbar: React.FC = () => {
  return (
    <nav
      style={{ backgroundColor: '#414141' }}
      className="flex flex-row justify-between items-center px-40 h-16 sticky"
    >
      <Link to={PATH.HOME}>
        <div>
          <img src="./assets/icon/logo.svg" />
        </div>
      </Link>
      <div className="flex flex-row">
        <div className="flex flex-row mr-4">
          <img src="./assets/icon/icon_memo.svg" />
          <span className="text-white font-light ml-2">自分の記録</span>
        </div>
        <Link to={PATH.RECORD}>
          <div className="flex flex-row mr-4">
            <img src="./assets/icon/icon_challenge.svg" />
            <span className="text-white font-light ml-2">チャレンジ</span>
          </div>
        </Link>
        <div className="flex flex-row mr-12">
          <Link to={PATH.HEALTH}>
            <div className="relative notification">
              <img src="./assets/icon/icon_info.svg" />
              <span className="badge">1</span>
            </div>
          </Link>
          <span className="text-white font-light ml-2">お知らせ</span>
        </div>
        <div>
          <img src="./assets/icon/icon_menu.svg" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
