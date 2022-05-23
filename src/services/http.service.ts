import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

@Injectable()
export class HttpService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create();
    this.client.interceptors.response.use(
      this.responseHandler,
      this.errorHandler,
    );
  }

  get(url: string, config?: AxiosRequestConfig) {
    return this.client.get(url, config);
  }

  post(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.client.post(url, data, config);
  }

  put(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.client.put(url, data, config);
  }

  delete(url: string, config: AxiosRequestConfig) {
    return this.client.delete(url, config);
  }

  private responseHandler({ data }: AxiosResponse) {
    return data;
  }

  private errorHandler(error) {
    console.error('HttpClient ERROR detected: ', error);
    Promise.reject(error);
  }
}
