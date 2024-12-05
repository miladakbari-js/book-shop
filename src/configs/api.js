import axios from "axios";
import { getCooKie } from "../utils/setCookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((request) => {
  const token = getCooKie("token");
  if (token) {
    request.headers["Authorization"] = `bearer ${token}`;
  }
  return request;
});
export default api;
