import axios from "axios";
import { storage } from "../utils/store";

const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NiIsIkhldEhhblN0cmluZyI6IjI1LzEyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTczNTA4NDgwMDAwMCIsIm5iZiI6MTcwNTUxMDgwMCwiZXhwIjoxNzM1MjMyNDAwfQ.FrZqgp-B9SVwd6fnz8aY6uCneamGpnAdxPt96fXIUKw";
export const fetcher = (config) => {
  const api = axios.create(config);
  api.interceptors.request.use((config) => {
    return {
      ...config,
      headers: {
        Authorization: "Bearer" + storage.get("accessToken") || "",
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    };
  });
  return api;
};
