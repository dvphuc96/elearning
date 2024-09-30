import { fetcher } from "./fetcher";

export const courseApi = {
  getListCourse: async () => {
    try {
      const response = await fetcher.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
      return response.data;
    } catch (error) {
      throw error?.response?.data;
    }
  },
  registerCourse: async (payload) => {
    try {
      const response = await fetcher.post(
        "/QuanLyKhoaHoc/DangKyKhoaHoc",
        payload
      );
      return response.data;
    } catch (error) {
      throw error?.response?.data;
    }
  },
};
