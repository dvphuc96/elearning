import axios from "axios";
import { storage } from "../utils/store";

const BASE_URL = "https://elearningnew.cybersoft.edu.vn/api";
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NiIsIkhldEhhblN0cmluZyI6IjI1LzEyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTczNTA4NDgwMDAwMCIsIm5iZiI6MTcwNTUxMDgwMCwiZXhwIjoxNzM1MjMyNDAwfQ.FrZqgp-B9SVwd6fnz8aY6uCneamGpnAdxPt96fXIUKw";
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
