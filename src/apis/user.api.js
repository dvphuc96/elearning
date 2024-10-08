import { handleSleep } from "utils";
import { fetcher } from "./fetcher";
import { storage } from "../utils/store";

export const userApi = {
  login: async (payload) => {
    try {
      const response = await fetcher.post("/QuanLyNguoiDung/DangNhap", payload);
      await handleSleep();
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error?.response?.data;
    }
  },
  register: async (payload) => {
    try {
      const response = await fetcher.post("/QuanLyNguoiDung/DangKy", payload);
      await handleSleep();
      return response.data;
    } catch (error) {
      throw error?.response?.data;
    }
  },
  getUserByAccessToken: async () => {
    try {
      const token = storage.get("accessToken");
      if (token) {
        const response = await fetcher.post(
          "/QuanLyNguoiDung/ThongTinTaiKhoan",
          token
        );
        return response.data;
      }
    } catch (error) {
      throw error?.response?.data;
    }
  },

  update: async (payload) => {
    try {
      await fetcher.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", payload);
      await handleSleep();
      const response = await userApi.getUserByAccessToken();
      return response;
    } catch (error) {
      throw error.response.data;
    }
  }
};
