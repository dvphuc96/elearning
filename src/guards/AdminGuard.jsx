import { useEffect } from "react";

import { useAuth } from "hooks";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AdminGuard = (props) => {
  const { userLogin, accessToken } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }

    if (userLogin && userLogin.maLoaiNguoiDung !== "GV") {
      Swal.fire({
        title: "Bạn không có quyền truy cập vào trang admin.",
        text: "Kiểm tra lại tài khoản nhé!",
        icon: "error",
        confirmButtonText: "Đồng ý",

        willClose: () => {
          navigate("/");
        },
      });
    }
  }, [accessToken, userLogin, navigate]);
  return <>{props.children}</>;
};
