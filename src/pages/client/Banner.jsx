import React from "react";
import styled from "styled-components";

export const Banner = () => {
  return (
    <Container>
      <div className="grid grid-cols-2">
        <div className="banner-left mt-52 ms-10">
          <h1>Chào mừng</h1>
          <h1>Đến với môi trường</h1>
          <h1>V-Learning</h1>
        </div>
        <div className="banner-right">
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/slider2.f170197b.png"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
    h1 {
        font-size: 50px;
        font-weight: 600;
        text-align: left;
    }
`
