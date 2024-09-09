import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import styles from './Carousel.module.scss';

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5
  };
  return (
    <>
    <div className="pt-20">
      <div className="pb-20 font-600 text-left">
        Giảng viên hàng đầu
      </div>
      <div className="slider-container">
        <StyledSlider {...settings}>
          {/* 1 */}
          <div>
            <div className={styles.instructorContent}>
              <img src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg" alt="" />
              <h6>Minh Hy</h6>
              <div className={styles.textRole}>
                <p>Chuyên gia lĩnh vực</p>
                <p>lập trình</p>
              </div>
              <p className="reviewMentor">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span className={styles.textStar}> 4.9</span>
              </p>
              <span className={styles.textReview}>100 Đánh giá</span>
            </div>
          </div>
          {/* 2 */}
          <div>
          <div className={styles.instructorContent}>
              <img src="https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg" alt="" />
              <h6>Hiếu Hồ</h6>
              <div className={styles.textRole}>
                <p>Chuyên gia ngôn ngữ</p>
                <p>Vue JS</p>
              </div>
              <p className="reviewMentor">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span className={styles.textStar}> 4.9</span>
              </p>
              <span className={styles.textReview}>100 Đánh giá</span>
            </div>
          </div>
          {/* 3 */}
          <div>
          <div className={styles.instructorContent}>
              <img src="https://demo2.cybersoft.edu.vn/static/media/instrutor7.edd00a03.jpg" alt="" />
              <h6>Quang Vinh</h6>
              <div className={styles.textRole}>
                <p>Chuyên gia hệ thống </p>
                <p>máy tính</p>
              </div>
              <p className="reviewMentor">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span className={styles.textStar}> 4.9</span>
              </p>
              <span className={styles.textReview}>100 Đánh giá</span>
            </div>
          </div>
          {/* 4 */}
          <div>
          <div className={styles.instructorContent}>
              <img src="https://demo2.cybersoft.edu.vn/static/media/instrutor8.aec2f526.jpg" alt="" />
              <h6>Hiếu Chần</h6>
              <div className={styles.textRole}>
                <p>Chuyên gia lĩnh vực</p>
                <p>Full Skill</p>
              </div>
              <p className="reviewMentor">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span className={styles.textStar}> 4.9</span>
              </p>
              <span className={styles.textReview}>100 Đánh giá</span>
            </div>
          </div>
          {/* 5 */}
          <div>
          <div className={styles.instructorContent}>
              <img src="https://demo2.cybersoft.edu.vn/static/media/instrutor9.504ea6c5.jpg" alt="" />
              <h6>Tiến Duy</h6>
              <div className={styles.textRole}>
                <p>Chuyên gia lĩnh vực</p>
                <p>Phân tích</p>
              </div>
              <p className="reviewMentor">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span className={styles.textStar}> 4.9</span>
              </p>
              <span className={styles.textReview}>100 Đánh giá</span>
            </div>
          </div>
          {/* 6 */}
          <div>
          <div className={styles.instructorContent}>
              <img src="https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg" alt="" />
              <h6>Văn Phúc</h6>
              <div className={styles.textRole}>
                <p>Chuyên gia lĩnh vực</p>
                <p>PHP</p>
              </div>
              <p className="reviewMentor">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span className={styles.textStar}> 4.9</span>
              </p>
              <span className={styles.textReview}>100 Đánh giá</span>
            </div>
          </div>
          {/* 7 */}
          <div>
          <div className={styles.instructorContent}>
              <img src="https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg" alt="" />
              <h6>Tommy</h6>
              <div className={styles.textRole}>
                <p>Chuyên gia lĩnh vực</p>
                <p>Front End</p>
              </div>
              <p className="reviewMentor">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span className={styles.textStar}> 4.9</span>
              </p>
              <span className={styles.textReview}>100 Đánh giá</span>
            </div>
          </div>
        </StyledSlider>
      </div>
    </div>
    </>
  );
}

const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: -20px;
    
    li {
      margin: 0 5px;
    }
    
    button:before {
      font-size: 12px;
      color: #ccc;
      opacity: 1;
    }
    
    li.slick-active button:before {
      color: #f6ba35;
    }
  }
`;

export default SimpleSlider;
