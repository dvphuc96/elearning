import { AuthTemplate } from "components";
import { useOpenModal } from "hooks/useOpenModal";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import styles from "./DetailPage.module.scss";

export const DetailPage = () => {
  const { isOpen, openModal, closeModal } = useOpenModal();
  return (
    <>
      <div className={styles.titleCourse}>
        <h3>thông tin khóa học</h3>
        <p>tiến lên và không chần chừ !!!</p>
      </div>
      <Container>
        <div className="grid grid-cols-3">
          {/* left part */}
          <div className="col-span-2 text-left">
            <h4 className="font-500">Lập Trình Elearning 2</h4>
            <div className="grid grid-cols-3 py-30">
              {/* 1 */}
              <div>
                <div className={styles.detailCourseInfo}>
                  <div>
                    <img
                      src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
                      alt=""
                    />
                  </div>
                  <div className="px-5">
                    <p>Giảng viên</p>
                    <p className="font-600">Nguyễn Quang Vinh</p>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div>
                <div className={styles.detailCourseInfo}>
                  <div>
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="px-5">
                    <p>Lĩnh vực</p>
                    <p className="font-600">Lập Trình Backend</p>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div>
                <div className={styles.detailCourseInfo}>
                  <div className={styles.reviewDetail}>
                    <span className="font-600">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <i className="far fa-star"></i>
                      3.5
                    </span>
                    <p>100 đánh giá</p>
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.textDiscripts}>
              React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử
              dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện
              đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ
              cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt
              lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái
              niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và
              bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan
              trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do
              tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí
              không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một
              số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công
              nghệ quan trọng với tư cách là một nhà phát triển web và trong
              khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan
              trọng!
            </p>
            <div className={styles.boxCourseLearn}>
              <h6>những gì bạn sẽ học</h6>
              <div className="grid grid-cols-2 gap-28">
                {/* 1 */}
                <div>
                  <ul>
                    <li>
                      <i className="fas fa-check"></i>
                      <a href="/">
                        Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân
                        thiện với người dùng và phản ứng nhanh
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <a href="/">
                        Đăng ký công việc được trả lương cao hoặc làm freelancer
                        trong một trong những lĩnh vực được yêu cầu nhiều nhất
                        mà bạn có thể tìm thấy trong web dev ngay bây giờ
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <a href="/">
                        Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận
                        dụng sức mạnh của JavaScript một cách dễ dàng
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <a href="/">
                        Tìm hiểu tất cả về React Hooks và React Components
                      </a>
                    </li>
                  </ul>
                </div>
                {/* 2 */}
                <div>
                  <ul>
                    <li>
                      <i className="fas fa-check"></i>
                      <a href="/">
                        Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân
                        thiện với người dùng và phản ứng nhanh
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <a href="/">
                        Đăng ký công việc được trả lương cao hoặc làm freelancer
                        trong một trong những lĩnh vực được yêu cầu nhiều nhất
                        mà bạn có thể tìm thấy trong web dev ngay bây giờ
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <a href="/">
                        Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận
                        dụng sức mạnh của JavaScript một cách dễ dàng
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <a href="/">
                        Tìm hiểu tất cả về React Hooks và React Components
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.courseContent}>
              <h6>nội dung khóa học</h6>
              <div className={styles.courseItemDetail}>
                <div className={styles.courseDetailContent}>
                  <div className={styles.sectionCourse}>
                    <span>Mục 1: Giới thiệu</span>
                    <button className={styles.btnPreview}>Xem trước</button>
                  </div>
                  <p>Bài học</p>
                  <div className={styles.lessonContainer}>
                    <div className={styles.lessonContent}>
                      <span>
                        <i className="fas fa-play-circle"></i>Các khái niệm về
                        React Component
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 14:35
                      </span>
                    </div>
                    <div className={styles.lessonContent}>
                      <span>
                        <i className="fas fa-play-circle"></i>Các khái niệm về
                        React Component
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 14:35
                      </span>
                    </div>
                    <div className={styles.lessonContent}>
                      <span>
                        <i className="fas fa-play-circle"></i>Các khái niệm về
                        React Component
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 14:35
                      </span>
                    </div>
                    <div className={styles.lessonContent}>
                      <span>
                        <i className="fas fa-play-circle"></i>Các khái niệm về
                        React Component
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 14:35
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.courseItemDetail}>
                <div className={styles.courseDetailContent}>
                  <div className={styles.sectionCourse}>
                    <span>Mục 1: Giới thiệu</span>
                    <button className={styles.btnPreview}>Xem trước</button>
                  </div>
                  <p>Bài học</p>
                  <div className={styles.lessonContainer}>
                    <div className={styles.lessonContent}>
                      <span>
                        <i className="fas fa-play-circle"></i>Các khái niệm về
                        React Component
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 14:35
                      </span>
                    </div>
                    <div className={styles.lessonContent}>
                      <span>
                        <i className="fas fa-play-circle"></i>Các khái niệm về
                        React Component
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 14:35
                      </span>
                    </div>
                    <div className={styles.lessonContent}>
                      <span>
                        <i className="fas fa-play-circle"></i>Các khái niệm về
                        React Component
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 14:35
                      </span>
                    </div>
                    <div className={styles.lessonContent}>
                      <span>
                        <i className="fas fa-play-circle"></i>Các khái niệm về
                        React Component
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 14:35
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.courseItemDetail}>
                <div className={styles.courseDetailContent}>
                  <div className={styles.sectionCourse}>
                    <span>Mục 1: Giới thiệu</span>
                    <button className={styles.btnPreview}>Xem trước</button>
                  </div>
                  <p>Bài học</p>
                  <div className={styles.lessonContainer}>
                    <div className={styles.lessonContent}>
                      <span>
                        <i className="fas fa-play-circle"></i>Các khái niệm về
                        React Component
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 14:35
                      </span>
                    </div>
                    <div className={styles.lessonContent}>
                      <span>
                        <i className="fas fa-play-circle"></i>Các khái niệm về
                        React Component
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 14:35
                      </span>
                    </div>
                    <div className={styles.lessonContent}>
                      <span>
                        <i className="fas fa-play-circle"></i>Các khái niệm về
                        React Component
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 14:35
                      </span>
                    </div>
                    <div className={styles.lessonContent}>
                      <span>
                        <i className="fas fa-play-circle"></i>Các khái niệm về
                        React Component
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 14:35
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right part */}
          <div>
            <div className={styles.sideBarCourseDetail}>
              <img
                src="https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-elearing-2_gp01.jpg"
                alt=""
              />
              <div className={styles.coursePrice}>
                <p>
                  <i className="fas fa-bolt"></i>500.000<sup>đ</sup>
                </p>
              </div>
              <NavLink to="/" onClick={openModal}>
                <button className={styles.btnPreview}>Đăng ký</button>
              </NavLink>
              <div className={styles.sideBarDetailContent}>
                <ul>
                  <li>
                    <p>
                      Ghi danh: <span>10 học viên</span>
                    </p>
                    <i className="fas fa-user-graduate"></i>
                  </li>
                  <li>
                    <p>
                      Ghi danh: <span>10 học viên</span>
                    </p>
                    <i className="fas fa-user-graduate"></i>
                  </li>
                  <li>
                    <p>
                      Ghi danh: <span>10 học viên</span>
                    </p>
                    <i className="fas fa-user-graduate"></i>
                  </li>
                  <li>
                    <p>
                      Ghi danh: <span>10 học viên</span>
                    </p>
                    <i className="fas fa-user-graduate"></i>
                  </li>
                  <li>
                    <p>
                      Ghi danh: <span>10 học viên</span>
                    </p>
                    <i className="fas fa-user-graduate"></i>
                  </li>
                </ul>
                <form action="" className={styles.formCoupon}>
                  <input type="text" placeholder="Nhập mã" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <AuthTemplate isOpen={isOpen} onCloseModal={closeModal} />
    </>
  );
};

const Container = styled.div`
  padding: 50px;
`;
