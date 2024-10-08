import { fetcher } from "./fetcher";
import { handleSleep } from "utils"
export const courseApi = {
  getListCourse: async () => {
    try {
      const response = await fetcher.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
      return response.data;
    } catch (error) {
      throw error?.response?.data;
    }
  },
  getListCategory: async () => {
    try {
      const response = await fetcher.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
      return response.data;
    } catch (error) {
      throw error?.response?.data;
    }
  },

  getDetailCourse: async (maKhoaHoc) => {
    try {
      const response = await fetcher.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`);
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
  getListCoursePagination: async (page, pageSize) => {
    try {
      const response = await fetcher.get(`/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${pageSize}&MaNhom=GP01`);
      return response.data;
    } catch (error) {
      throw error?.response?.data;
    }
  },
  deleteCourse: async (maKhoaHoc) => {
    try {
      const response = await fetcher.delete(`/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`);
      return response.data;
    } catch (error) {
      throw error?.response?.data;
    }
  },
  addCourse: async (payload) => {
    try {
      const response = await fetcher.post("QuanLyKhoaHoc/ThemKhoaHocUploadHinh", payload);
      handleSleep();
      return response.data;
    } catch (error) {
      throw error?.response?.data;
    }
  },
  updateCourse: async (formData) => {
    try {
      const response = await fetcher.post("QuanLyKhoaHoc/CapNhatKhoaHocUpload", formData);
      handleSleep();
      return response?.data;
    } catch (error) {
      throw error?.response?.data;
    }
  }
};
