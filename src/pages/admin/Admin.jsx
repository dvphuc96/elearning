import { useState } from 'react';
import {
  FileOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/path';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { userManagementActions } from '../../store/userManagement';
import { toast } from 'react-toastify';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Course", "1", <FileOutlined />, [
    getItem(
      <div>
        <NavLink to={PATH.course}>Course List</NavLink>
      </div>,
      "2"
    ),
    getItem(
      <div>
        <NavLink to={PATH.createCourse}>Add Course</NavLink>
      </div>,
      "3"
    ),
  ]),
  getItem('User', '5', <UserOutlined />, [
    getItem(
      <div>
        <NavLink to={PATH.user}>User List</NavLink>
      </div>,
      "6"
    ),
    getItem(
      <div>
        <NavLink to={PATH.createUser}>Add User</NavLink>
      </div>,
      "7"
    ),
  ]),
];
export const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLogout = () => {
    try {
      dispatch(userManagementActions.logout());
      toast.success("Logout Success");
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Logout Failed');
    }
  }
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          className="demo-logo-vertical relative flex items-center justify-center h-[60px] cursor-pointer"
          onClick={() => navigate(PATH.admin)}
        >
          <p className="font-700 text-18 text-white">
            <span className="text-[var(--primary-color)]">CYBER </span>
            ELEARNING
          </p>
        </div>
        <Menu theme="dark" defaultSelectedKeys={location.pathname} mode="inline" items={items} />
        <DivLogOut>
          <button onClick={handleLogout}>
            <LogoutOutlined />
            <span>Logout</span>
          </button>
        </DivLogOut>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

const DivLogOut = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 9999;
  width: 200px;
  height: 50px;
  color: #fff;
  background: #002140;
  cursor: pointer;
  transition: all 0.2s;
  button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    height: 40px;
    line-height: 40;
    padding-inline: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-inline: 4px;
    margin-block: 4px;
    padding-left: 24px;
    width: calc(100% - 8px);
    border-radius: 8px;
    span {
      &:last-child {
        margin-left: 10px;
      }
    }
  }
`