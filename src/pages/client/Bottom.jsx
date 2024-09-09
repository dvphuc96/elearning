import React from "react";
import styles from "./Bottom.module.scss";
export const Bottom = () => {
  return (
    <div className="bottomContainer py-32">
      <div className="grid grid-cols-2 gap-4">
        <div className=" flex justify-center items-center">
          <div className={styles.bottomImg}>
            <div className={styles.bgBottomImg}>
            <img
              className=" w-32 h-32 "
              src="https://demo2.cybersoft.edu.vn/static/media/avatarReview.2f5a1f3c.png"
              alt=""
            />
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <q className="text-lg italic text-left">
            Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập
            trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn
            được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng
            lập và giảng viên dày kinh nghiệm. Thực sự rất hay và hấp dẫn.
          </q>
          <p className={styles.bottomName}>Nhi Dev</p>
          <span className={styles.student}>Học viên xuất sắc</span>
        </div>
      </div>
    </div>
  );
};
