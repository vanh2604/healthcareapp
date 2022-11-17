import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { PATH } from '../../routes/constants';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

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
        <Link to={PATH.HOME}>
          <div className="flex flex-row mr-4">
            <img style={{ width: '33px', height: '33px' }} src="./assets/icon/icon_memo.svg" />
            <span className="text-white font-light ml-2">自分の記録</span>
          </div>
        </Link>
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
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button>
              <div>
                <img src="./assets/icon/icon_menu.svg" />
              </div>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              style={{ backgroundColor: '#777777' }}
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'active-background' : 'inactive-background',
                        'block px-4 py-2 text-sm text-white'
                      )}
                    >
                      自分の記録
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'active-background' : 'inactive-background',
                        'block px-4 py-2 text-sm text-white'
                      )}
                    >
                      体重グラフ
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'active-background' : 'inactive-background',
                        'block px-4 py-2 text-sm text-white'
                      )}
                    >
                      目標
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'active-background' : 'inactive-background',
                        'block px-4 py-2 text-sm text-white'
                      )}
                    >
                      選択中のコース
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'active-background' : 'inactive-background',
                        'block px-4 py-2 text-sm text-white'
                      )}
                    >
                      コラム一覧
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'active-background' : 'inactive-background',
                        'block px-4 py-2 text-sm text-white'
                      )}
                    >
                      設定
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
