import { requestServices } from '../service';
import { IRecommendResponse } from '../interfaces/recommend';

const { healthCareClient } = requestServices;

const getRecommendInfo = (): Promise<IRecommendResponse> => {
  return healthCareClient.get('/recommend');
};

export default {
  getRecommendInfo
};
