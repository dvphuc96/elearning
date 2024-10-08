import { Tabs } from "antd";
import { AccountInfo } from "./AccountInfo";
import { AccountHistoryRegister } from "./AccountHistoryRegister";
import styled from "styled-components";
import { useAuth } from "hooks";

export const Account = () => {
  return (
    <div className="pt-[100px] mx-20 my-[20px]">
      <div
        className="max-w-[1100px] mx-auto mt-[20px] p-[20px]"
        style={{ border: "1px solid #c9c9c9" }}
      >
        <Tabs
          tabPosition="left"
          items={[
            {
              label: (
                <ButtonCustom>
                  <p>Thông tin tài khoản</p>
                </ButtonCustom>
              ),
              key: "accountInfo",
              children: <AccountInfo />,
            },
            {
              label: (
                <ButtonCustom>
                  <p>Lịch sử đăng ký khoá học</p>
                </ButtonCustom>
              ),
              key: "accountHistoryBooking",
              children: <AccountHistoryRegister />,
            },
          ]}
        />
      </div>
    </div>
  );
};

const ButtonCustom = styled.button`
  height: 75px;
  padding: 0 20px;
  position: relative;
  text-align: left;
  transition: all ease 0.4s;
  width: 100%;
  &::after {
    width: 80%;
    bottom: 0;
    height: 1px;
    content: "";
    display: block;
    position: absolute;
    background: #c9c9c9;
  }
  p {
    width: 100%;
    color: #000;
    font-size: 18px;
    text-decoration: none;
    &:hover {
      color: var(--primary-color);
    }
  }
`;
