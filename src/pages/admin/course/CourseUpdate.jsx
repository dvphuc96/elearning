import { useMutation, useQuery } from "@tanstack/react-query";
import { Input, Form, InputNumber, Button, DatePicker, Select, Upload } from "antd";
import { useEffect } from "react";
import { Controller, useForm } from 'react-hook-form';
import { courseApi } from "../../../apis/course.api";
import { useAuth } from "hooks";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { PATH } from "../../../constants/path";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateCourseSchema } from "../../../schema/CreateOrUpdateCourseSchema";
import dayjs from "dayjs";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { object } from "zod";

export const CourseUpdate = () => {
  const { maKhoaHoc } = useParams();
  const { userLogin } = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: zodResolver(UpdateCourseSchema),
    defaultValues: {
      maKhoaHoc: '',
      tenKhoaHoc: '',
      biDanh: '',
      moTa: '',
      luotXem: '',
      danhGia: '',
      maDanhMucKhoaHoc: '',
      ngayTao: '',
      taiKhoanNguoiTao: '',
      hinhAnh: undefined,
    },
  });
  const { data: listCategory } = useQuery({
    queryKey: ["category"],
    queryFn: () => courseApi.getListCategory(),
  })
  const { data: courseDetail } = useQuery({
    queryKey: ["course-detail", maKhoaHoc],
    queryFn: () => courseApi.getDetailCourse(maKhoaHoc),
  })
  const { mutate: handleUpdateCourse, isPending } = useMutation({
    mutationFn: (payload) => courseApi.updateCourse(payload),
    onSuccess: () => {
      toast.success("Cập nhật khoá học thành công!");
      navigate(PATH.course);
    },
    onError: (error) => {
      toast.error(error)
    }
  })

  useEffect(() => {
    if (courseDetail) {
      setValue('maKhoaHoc', courseDetail.maKhoaHoc);
      setValue('tenKhoaHoc', courseDetail.tenKhoaHoc);
      setValue('biDanh', courseDetail.biDanh);
      setValue('moTa', courseDetail.moTa);
      setValue('luotXem', courseDetail.luotXem);
      setValue('danhGia', courseDetail?.danhGia?.toString() ?? 10);
      setValue('maDanhMucKhoaHoc', courseDetail?.danhMucKhoaHoc?.maDanhMucKhoahoc);
      setValue("ngayTao", courseDetail?.ngayTao);
      setValue("hinhAnh", courseDetail?.hinhAnh);
    }
  }, [courseDetail, setValue]);

  const watchHinhAnh = watch('hinhAnh')
  const onSubmit = async (values) => {
    values.maKhoaHoc = courseDetail?.maKhoaHoc;
    values.maNhom = "GP01";
    values.taiKhoanNguoiTao = userLogin.taiKhoan;

    const formData = new FormData();
    for (let key in values) {
      if (key !== "hinhAnh") {
        formData.append(key, values[key]);
      } else {
        if (typeof values.hinhAnh === object) {
          formData.append('File', values.hinhAnh[0], values.hinhAnh.name);
        } else {
          formData.append('hinhAnh', values.hinhAnh);
        }
      }
    }
    handleUpdateCourse(formData);
    reset();
  }
  return (
    <>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit(onSubmit)}
      >
        <Form.Item label="Mã Khoá Học">
          <Controller
            name="maKhoaHoc"
            defaultValue=""
            disabled
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item label="Tên Khoá Học">
          <Controller
            name="tenKhoaHoc"
            defaultValue=""
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          {errors.tenKhoaHoc && (
            <p className="text-red-500 font-600 text-15 mt-10 text-left">
              {errors?.tenKhoaHoc?.message}
            </p>
          )}
        </Form.Item>
        <Form.Item label="Bí Danh">
          <Controller
            name="biDanh"
            defaultValue=""
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          {errors.biDanh && (
            <p className="text-red-500 font-600 text-15 mt-10 text-left">
              {errors?.biDanh?.message}
            </p>
          )}
        </Form.Item>
        <Form.Item label="Mô tả">
          <Controller
            name="moTa"
            defaultValue=""
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          {errors.moTa && (
            <p className="text-red-500 font-600 text-15 mt-10 text-left">
              {errors?.moTa?.message}
            </p>
          )}
        </Form.Item>
        <Form.Item label="Lượt Xem">
          <Controller
            name="luotXem"
            control={control}
            render={({ field }) => {
              return <InputNumber className="flex" {...field} />
            }}
          />
          {errors.luotXem && (
            <p className="text-red-500 font-600 text-15 mt-10 text-left">
              {errors?.luotXem?.message}
            </p>
          )}
        </Form.Item>
        <Form.Item label="Đánh giá">
          <Controller
            name="danhGia"
            control={control}
            render={({ field }) => <InputNumber className="flex" {...field} />}
          />
          {errors.danhGia && (
            <p className="text-red-500 font-600 text-15 mt-10 text-left">
              {errors?.danhGia?.message}
            </p>
          )}
        </Form.Item>
        <Form.Item label="Danh Mục Khoá Học">
          <Controller
            name="maDanhMucKhoaHoc"
            defaultValue=""
            control={control}
            render={({ field }) => {
              return (
                <Select
                  className="flex text-left"
                  showSearch
                  style={{
                    width: 225,
                  }}
                  placeholder="Chọn danh mục khóa học"
                  value={field}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                  options={
                    listCategory?.map(ele => ({ value: ele.maDanhMuc, label: ele.tenDanhMuc }))
                  }
                />
              )
            }}
          />
          {errors.maDanhMucKhoaHoc && (
            <p className="text-red-500 font-600 text-15 mt-10 text-left">
              {errors?.maDanhMucKhoaHoc?.message}
            </p>
          )}
        </Form.Item>
        <Form.Item label="Ngày tạo">
          <Controller
            name="ngayTao"
            control={control}
            render={({ field }) => {
              return (
                <DatePicker
                  className="flex w-1/2"
                  picker="date"
                  format={"DD/MM/YYYY"}
                  value={field.value ? dayjs(field.value, "DD/MM/YYYY") : null}
                  onChange={(_, dateString) => {
                    field.onChange(dateString);
                  }}
                />
              );
            }}
          />
          {errors.ngayTao && (
            <p className="text-red-500 font-600 text-15 mt-10 text-left">
              {errors?.ngayTao?.message}
            </p>
          )}
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <Controller
            name='hinhAnh'
            control={control}
            render={({ field: { onChange, ...field } }) => {
              return (
                <Upload
                  {...field}
                  name='avatar'
                  listType='picture-card'
                  className='avatar-uploader mt-1 relative w-fit'
                  showUploadList={false}
                  multiple={false}
                  beforeUpload={() => false}
                  onChange={({ file }) => {
                    onChange(file);
                  }}
                >
                  <button
                    style={{
                      border: 0,
                      background: 'none',
                    }}
                    type="button"
                  >
                    <div>
                      {watchHinhAnh
                        ? (
                          <>
                            <img className='w-[100px] h-[100ppx] object-cover' src={(watchHinhAnh instanceof File
                              ? URL.createObjectURL(watchHinhAnh)
                              : watchHinhAnh)} />
                            <div onClick={(event) => { event.stopPropagation(); setValue('hinhAnh', undefined) }} className='absolute top-2 right-2 cursor-pointer hover:text-red-500'>
                              <DeleteOutlined />
                            </div>
                          </>
                        )
                        : (
                          <PlusOutlined />
                        )}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          marginTop: 8,
                        }}
                      >
                        Upload
                      </div>
                    </div>
                  </button>
                </Upload>)
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isPending}>
            Cập nhật Khoá Học
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
