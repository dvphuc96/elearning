import React, { useEffect } from "react";
import styles from "./NumberContainer.module.scss";

export const NumberContainer = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const options = {
      root: null, 
      rootMargin: "0px",
      threshold: 0.5, 
    };

    const startCounter = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const item = entry.target;
          let count = 1;
          const targetNumber = parseInt(item.textContent);
          let speed = 1; 

          const counterUp = () => {
            item.textContent = count++;
            if (count > targetNumber) {
              clearInterval(stop);
              observer.unobserve(item);
            }
          };

          const stop = setInterval(counterUp, speed);
        }
      });
    };

    const observer = new IntersectionObserver(startCounter, options);

    counters.forEach((counter) => {
      observer.observe(counter);
    });
  }, []);

  return (
    <div className={`${styles.boxNumberContainer} mt-20`}>
      <div className="grid grid-cols-4">
        {/* 1 */}
        <div>
          <div className={styles.boxNumber}>
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/003-students.e1a7c67b.png"
              alt="students"
            />
          </div>
          <div className={styles.textNumber}>
            <span className="counter">9000</span>
          </div>
          <p className={styles.textNumberTitle}>Học Viên</p>
        </div>
        {/* 2 */}
        <div>
          <div className={styles.boxNumber}>
            <div>
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/001-timetable.0e009173.png"
                alt="timetable"
              />
            </div>
          </div>
          <div className={styles.textNumber}>
            <span className="counter">1000</span>
          </div>
          <p className={styles.textNumberTitle}>Khóa Học</p>
        </div>
        {/* 3 */}
        <div>
          <div className={styles.boxNumber}>
            <div>
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/002-hourglass.548810be.png"
                alt="hourglass"
              />
            </div>
          </div>
          <div className={styles.textNumber}>
            <span className="counter">33200</span>
          </div>
          <p className={styles.textNumberTitle}>Giờ Học</p>
        </div>
        {/* 4 */}
        <div>
          <div className={styles.boxNumber}>
            <div>
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/004-teacher.5bbd6eec.png"
                alt="teacher"
              />
            </div>
          </div>
          <div className={styles.textNumber}>
            <span className="counter">400</span>
          </div>
          <p className={styles.textNumberTitle}>Giảng Viên</p>
        </div>
      </div>
    </div>
  );
};
