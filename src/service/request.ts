import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_URL } from './constant';

const healthCareClient = axios.create({
  baseURL: API_URL
});

const responseSuccessInterceptor = (response: AxiosResponse) => {
  // Do something with response data
  return response.data;
};

const responseErrorInterceptor = (error: AxiosError) => {
  // Do something with response error
  return Promise.reject(error);
};

const clients = [healthCareClient];

clients.forEach((client) => {
  client.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);
});

export default {
  healthCareClient
};
