import { requestServices } from '../service';
import { IRecordResponse } from '../interfaces/record';

const { healthCareClient } = requestServices;

const getRecordInfo = (): Promise<IRecordResponse> => {
  return healthCareClient.get('/record');
};

export default {
  getRecordInfo
};
