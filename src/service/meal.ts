import { requestServices } from '../service';

const { healthCareClient } = requestServices;

const getHealInfo = () => {
  return healthCareClient.get('/meal');
};

export default {
  getHealInfo
};
