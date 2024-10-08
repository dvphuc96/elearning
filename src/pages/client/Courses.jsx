import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Pagination, Row, Col, Card } from "antd"; // Sử dụng Pagination từ Ant Design
import { courseApi } from "apis";
import { NavLink } from "react-router-dom";

const { Meta } = Card;

const Courses = () => {
  // State cho pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4); // Số lượng khóa học trên mỗi trang

  // Gọi API với pagination
  const { data, isLoading, error } = useQuery({
    queryKey: ["courses", currentPage, pageSize],
    queryFn: () =>
      courseApi.getListCourse({ page: currentPage, limit: pageSize }),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching courses</p>;

  return (
    <>
      <Row gutter={24}>
        {data?.map((course) => {
          const { hinhAnh, maKhoaHoc, moTa, tenKhoaHoc } = course;
          return (
          <Col key={maKhoaHoc} span={6}>
            <NavLink to={`/chitiet/${maKhoaHoc}`}>
              <Card
                hoverable
                style={{
                  overflow: "hidden",
                }}
                cover={
                  <img
                    alt="example"
                    src={hinhAnh}
                    style={{
                      height: "150px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
              >
                <Meta
                  style={{ padding: 10 }}
                  title={
                    <span className="customTitle">{tenKhoaHoc}</span>
                  }
                  description={moTa}
                />
                <div className="titleMaker">
                  <div className="imgFooter">
                    <img
                      src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png"
                      alt=""
                    />
                  </div>
                  <span className="cardColor ml-2">Elon musk</span>
                </div>
                <div className="cardFooter">
                  <div>
                    <p>
                      800.000<sup>đ</sup>
                    </p>
                    <p>
                      400.000<sup>đ</sup>
                    </p>
                  </div>
                  <div>
                    <i className="textStar fas fa-star mr-1"></i>
                    <span className="textStar">4.9</span>
                    <span className="cardColor"> (7840)</span>
                  </div>
                </div>
              </Card>
            </NavLink>
          </Col>
          )
        })}
      </Row>

      {/* Pagination */}
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={data.totalCourses}
        onChange={(page, size) => {
          setCurrentPage(page);
          setPageSize(size);
        }}
      />
    </>
  );
};

export default Courses;
