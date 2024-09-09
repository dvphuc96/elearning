import React from "react";
import styled from "styled-components";
import Courses from "../../Courses";
import styles from "../General.module.scss";

export const FullStack = () => {
  return (
    <>
      <div className={styles.titleCourse}>
        <h3>Khóa học theo danh mục</h3>
        <p>Hãy chọn khóa học mong muốn</p>
      </div>
      <Container>
        <div className={styles.courseCateName}>
          <button className={styles.courseCategoryBtn}>
            <i className="fas fa-desktop"></i>
            <span className={`${styles.listCourseTitle} ml-2`}>
              {" "}
              Lập Trình FullStack
            </span>
          </button>
        </div>
        <Courses />
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 30px;
`;
