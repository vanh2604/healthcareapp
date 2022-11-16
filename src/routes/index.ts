import { lazy } from 'react';
import { PATH } from './constants';

const Home = lazy(() => import('../pages/Home'));
const Health = lazy(() => import('../pages/Health'));
const Record = lazy(() => import('../pages/Record'));

const routes = [
  {
    path: PATH.HOME,
    component: Home
  },
  {
    path: PATH.HEALTH,
    component: Health
  },
  {
    path: PATH.RECORD,
    component: Record
  }
];

export default routes;
