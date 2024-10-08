import { Home } from "pages";
import { useRoutes } from "react-router-dom";
import { MainLayout } from "../components";
import { BackEnd } from "../pages/client/DanhMuc/BackEnd/BackEnd";
import { DiDong } from "../pages/client/DanhMuc/DiDong/DiDong";
import { FrontEnd } from "../pages/client/DanhMuc/FrontEnd/FrontEnd";
import { FullStack } from "../pages/client/DanhMuc/FullStack/FullStack";
import { TuDuy } from "../pages/client/DanhMuc/TuDuy/TuDuy";
import { Web } from "../pages/client/DanhMuc/Web/Web";
import { DetailPage } from "../pages/client/DetailPage/DetailPage";
import NotFound from "../pages/client/NotFound/NotFound";
import { Account } from "../pages/client/Account/Account";
import { AuthGuard } from "../guards/AuthGuard";
import { AdminGuard } from "../guards/AdminGuard";
import { Admin } from "../pages/admin/Admin";
import { PATH } from "../constants/path";
import { CourseList } from "../pages/admin/course/CourseList";
import { CourseCreate } from "../pages/admin/course/CourseCreate";
import { CourseUpdate } from "../pages/admin/course/CourseUpdate";
import { UserList } from "../pages/admin/user/UserList";
import { UserCreate } from "../pages/admin/user/UserCreate";
import { UserUpdate } from "../pages/admin/user/UserUpdate";
const Router = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/account",
          element: (
            <AuthGuard>
              <Account />
            </AuthGuard>
          ),
        },
        {
          path: "/backend",
          element: <BackEnd />,
        },
        {
          path: "/didong",
          element: <DiDong />,
        },
        {
          path: "/frontend",
          element: <FrontEnd />,
        },
        {
          path: "/fullstack",
          element: <FullStack />,
        },
        {
          path: "/tuduy",
          element: <TuDuy />,
        },
        {
          path: "/web",
          element: <Web />,
        },
        {
          path: "/sale",
          element: <NotFound />,
        },
        {
          path: "/giangsinh",
          element: <NotFound />,
        },
        {
          path: "/noel",
          element: <NotFound />,
        },
        {
          path: "/chitiet",
          element: <DetailPage />,
        },
      ],
    },
    {
      path: PATH.admin,
      element: (
        <AdminGuard>
          <Admin />
        </AdminGuard>
      ),
      children: [
        {
          index: true,
        },
        {
          children: [
            {
              path: PATH.course,
              element: <CourseList />,
            },
            {
              path: PATH.createCourse,
              element: <CourseCreate/>,
            },
            {
              path: PATH.updateCourse,
              element: <CourseUpdate />,
            },
            {
              path: PATH.user,
              element: <UserList />,
            },
            {
              path: PATH.createUser,
              element: <UserCreate />,
            },
            {
              path: PATH.updateUser,
              element: <UserUpdate />,
            },
            {
              path: "*",
              element: <NotFound />,
            },
          ]
        }
      ],
    },
  ]);
  return routing;
};

export default Router;
