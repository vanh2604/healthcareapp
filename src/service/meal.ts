import { requestServices } from '../service';
import { IMealResponse } from '../interfaces/meal';

const { healthCareClient } = requestServices;

const getHealInfo = (): Promise<IMealResponse> => {
  return healthCareClient.get('/meal');
};

export default {
  getHealInfo
};
