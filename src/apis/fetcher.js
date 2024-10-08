import axios from "axios";
import { storage } from "../utils/store";

const BASE_URL = "https://elearningnew.cybersoft.edu.vn/api";
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MSIsIkhldEhhblN0cmluZyI6IjE0LzAzLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MTkxMDQwMDAwMCIsIm5iZiI6MTcxNDA2NDQwMCwiZXhwIjoxNzQyMDU4MDAwfQ.aL6UU86iw9qfiazPYi9hHV3FjYthitqZbK5pBfChSiU";
export const fetcher = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

fetcher.interceptors.request.use((config) => {
  const token = storage.get("accessToken");
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: token ? `Bearer ${token}` : "",
      TokenCybersoft: TOKEN_CYBERSOFT,
    },
  };
});
