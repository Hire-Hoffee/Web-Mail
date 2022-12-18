import { store } from "../store";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const requestInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  store.dispatch({
    type: "utils/changeLoadingStatus",
    payload: true,
  });
  return config;
};

const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  store.dispatch({
    type: "utils/changeLoadingStatus",
    payload: false,
  });
  return response;
};

export { requestInterceptor, responseInterceptor };
