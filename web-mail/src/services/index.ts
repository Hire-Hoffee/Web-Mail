import axios from "axios";
import { requestInterceptor, responseInterceptor } from "./interceptors";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(requestInterceptor);
instance.interceptors.response.use(responseInterceptor);

export default instance;
