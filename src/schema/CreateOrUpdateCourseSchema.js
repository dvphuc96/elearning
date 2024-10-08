import { z } from "zod";

export const CreateCourseSchema = z.object({
    maKhoaHoc: z.string().nonempty("Vui lòng nhập mã khoá học"),
    tenKhoaHoc: z.string().nonempty("Vui lòng nhập tên khoá học"),
    biDanh: z.string().nonempty("Vui lòng nhập bí danh khoá học"),
    moTa: z.string().optional(),
    luotXem: z.number().optional(),
    danhGia: z.number().optional(),
    maDanhMucKhoaHoc: z.string({
        required_error: "Vui lòng chọn danh mục khoá học"
    }),
    ngayTao: z.string({
        required_error: "Vui lòng chọn ngày tạo",
        invalid_type_error: "Vui lòng nhập đúng định dạng (DD/MM/YYYY)",
    }),
    hinhAnh: z.any(),
})

export const UpdateCourseSchema = z.object({
    tenKhoaHoc: z.string().nonempty("Vui lòng nhập tên khoá học"),
    biDanh: z.string().nonempty("Vui lòng nhập bí danh khoá học"),
    moTa: z.string().optional(),
    luotXem: z.number().optional(),
    danhGia: z.number().optional(),
    maDanhMucKhoaHoc: z.string({
        required_error: "Vui lòng chọn danh mục khoá học"
    }),
    ngayTao: z.string({
        required_error: "Vui lòng chọn ngày tạo",
        invalid_type_error: "Vui lòng nhập đúng định dạng (DD/MM/YYYY)",
    }),
    hinhAnh: z.any(),
})