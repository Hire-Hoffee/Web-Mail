import axios from "axios";
import { requestInterceptor, responseInterceptor } from "./interceptors";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000/api" : "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(requestInterceptor);
instance.interceptors.response.use(responseInterceptor);

export default instance;
