import axios from "axios";
import { getCookie } from "../Hooks/coockie";

export const instance = axios.create({
  baseURL: "http://37.27.215.130:5545",
});

instance.interceptors.request.use(
  (config) => {
    const token = getCookie("access_token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("error");
    return Promise.reject(error);
  }
);