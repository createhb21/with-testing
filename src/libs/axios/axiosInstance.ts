import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {};
export const baseURL = process.env.APP_ENV === 'test'
  ? 'https://assignment.api.a-bly.com/api'
  : process.env.NEXT_PUBLIC_BASE_URL;

config.baseURL = baseURL;

export const axiosInstance = axios.create(config);
