import React from "react";
import styles from "./Info.module.scss";

export const Info = () => {
  return (
    <div className={styles.itemInfo}>
      <div className={`${styles.largeItem} ${styles.infoItemHome} row-span-2`}>
        <div className={`${styles.infoContent} text-white`}>
          <h3 className="font-700 text-2xl">KHÓA HỌC</h3>
          <p className="font-300">
            <span className="font-700">Học qua dự án thực tế</span>, học đi đôi
            với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề,
            xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế
            để học viên học xong làm được ngay
          </p>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              <span> Hơn 1000 bài tập và dự án thực tế</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span> Công nghệ cập nhật mới nhất</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span> Hình ảnh, ví dụ, bài giảng sinh động trực quan</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span> Tư duy phân tích, giải quyết vấn đề trong dự án</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                {" "}
                Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự
                án
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                {" "}
                Cơ hội thực tập tại các công ty lớn như FPT, Microsoft
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.smallItem1} ${styles.infoItemHome}`}>
        <div className={`${styles.infoContent} text-white`}>
          <h3>LỘ TRÌNH PHÙ HỢP</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              <span> Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span> Học, luyện tập code, kỹ thuật phân tích, soft skill</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                {" "}
                Huấn luyện để phát triển năng lực và niềm đam mê lập trình
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.smallItem2} ${styles.infoItemHome}`}>
        <div className={`${styles.infoContent} text-white`}>
          <h3>HỆ THỐNG HỌC TẬP</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              <span>
                {" "}
                Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học
                viên
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                {" "}
                Thống kê lượt xem video, làm bài, điểm số theo chu kỳ
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                {" "}
                Thống kê, so sánh khả năng học của các học viên cùng level để
                đưa ra mục tiêu học tập
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.smallItem1} ${styles.infoItemHome}`}>
        <div className={`${styles.infoContent} text-white`}>
          <h3>GIẢNG VIÊN</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              <span>
                {" "}
                Tương tác cùng mentor và giảng viên qua phần thảo luận
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span> Review code và đưa ra các nhận xét góp ý</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span> Chấm điểm tương tác thảo luận giữa các học viên</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.smallItem3} ${styles.infoItemHome}`}>
        <div className={`${styles.infoContent} text-white`}>
          <h3>CHỨNG NHẬN</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              <span> Chấm bài và có thể vấn đáp trực tuyến để review</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                {" "}
                Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc
                đáo
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                {" "}
                Kết nối CV của bạn đến với các đối tác của V learning
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
