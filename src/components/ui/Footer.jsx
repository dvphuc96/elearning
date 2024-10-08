import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <section className={styles.footerPage}>
      <div className={styles.footerBody}>
        <div className="grid grid-cols-6">
          <div className={`${styles.footerInfo} col-span-2`}>
            <a href="" className={styles.textLogo}>
              <span className={styles.textE}>V</span>
              <span className={styles.textL}>learning</span>
              <i className={`${styles.iconLogo} far fa-keyboard`}></i>
            </a>
            <ul className={styles.menuFooter}>
              <li>
                <i className="fas fa-phone-alt iconFooter"></i>
                <span>1800-123-4567</span>
              </li>
              <li>
                <i className="fas fa-envelope-open-text iconFooter"></i>
                <span>devit@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt iconFooter"></i>
                <span>Đà Nẵng</span>
              </li>
            </ul>
          </div>
          <div className={styles.textFooterTitle}>
            <h3>Liên kết</h3>
            <ul className={styles.menuFooter}>
              <li>
                <i className="fas fa-chevron-right"></i>
                Trang chủ
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                Dịch vụ
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                Nhóm
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                Blog
              </li>
            </ul>
          </div>
          <div className={styles.textFooterTitle}>
            <h3>Khóa học</h3>
            <ul className={styles.menuFooter}>
              <li>
                <i className="fas fa-chevron-right"></i>
                Front end
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                Back end
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                Full stack
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                Node Js
              </li>
            </ul>
          </div>
          <div className={`${styles.textFooterTitle} col-span-2`}>
            <h3>Đăng kí tư vấn</h3>
            <form action>
              <input
                className={styles.formFooter}
                type="text"
                placeholder="Họ và tên"
              />
              <input
                className={styles.formFooter}
                type="text"
                placeholder="Email"
              />
              <input
                className={styles.formFooter}
                type="text"
                placeholder="Số điện thoại"
              />
            </form>
            <button className={styles.register}>Đăng kí</button>
          </div>
        </div>
      </div>
      <div className={styles.extraFooter}>
        <div className={styles.textCardTitle}>
          <p>Copyright © 2021. All rights reserved.</p>
        </div>
        <div className={styles.socialMedia}>
          <i className={`${styles.iconMedia} fab fa-instagram `}></i>
          <i className={`${styles.iconMedia} fab fa-facebook`}></i>
          <i className={`${styles.iconMedia} fab fa-twitter`}></i>
        </div>
      </div>
    </section>
  );
};
