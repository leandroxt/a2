import axios from 'axios';

const BASE_URL = 'https://viacep.com.br/';

const standardHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

export function instance() {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: standardHeaders
  });

  axiosInstance.interceptors.response.use(
    response => response,
    error => Promise.reject(error.response)
  );

  return axiosInstance;
};