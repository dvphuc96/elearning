import { useState } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";
import { Input } from "components";
import { Modal, Button } from "antd";
import {
  FormContainer,
  SignUpContainer,
  SignInContainer,
  Form,
  Title,
  SocialContainer,
  SocialButton,
  Paragraph,
  OverlayContainer,
  Overlay,
  OverlayPanel,
  GhostButton,
} from "./AuthStyles";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { userManagementActions } from "../../../store/userManagement";
import { userApi } from "apis";

export const AuthTemplate = ({ isOpen, onCloseModal }) => {
  const [signIn, setSignIn] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  // Login mutation
  const { mutate: handleLogin, isPending: isPendingLogin } = useMutation({
    mutationFn: (payload) => userApi.login(payload),
    onSuccess: (response) => {
      dispatch(userManagementActions.login(response));
      onCloseModal();
      toast.success("Login Success");
      reset();
      navigate("/");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  // Register mutation (example, replace with actual implementation)
  const { mutate: handleRegister, isPending: isPendingRegister } = useMutation({
    mutationFn: (payload) => userApi.register(payload), // Assuming you have a userApi.register function
    onSuccess: () => {
      reset();
      onCloseModal();
      toast.success("Registration Successful");
      navigate("/");
    },

    onError: (error) => {
      toast.error(error);
    },
  });

  // Submit handler for Login
  const onSubmitLogin = async (values) => {
    const payload = {
      taiKhoan: values.taiKhoan_login,
      matKhau: values.password,
    };
    handleLogin(payload);
  };

  // Submit handler for Register
  const onSubmitRegister = async (values) => {
    const payload = {
      hoTen: values.hoTen,
      taiKhoan: values.taiKhoan_register,
      email: values.email,
      matKhau: values.matKhau,
      soDT: values.soDT,
      maNhom: "GP01",
    };
    handleRegister(payload);
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onCloseModal}
      footer={null}
      centered
      className="custom-modal"
      destroyOnClose
      width={1200}
      styles={{
        body: {
          height: 600,
        },
      }}
    >
      <FormContainer
        className={cn({ "signin-active": signIn, "signup-active": !signIn })}
      >
        <SignInContainer className="sign-in-container">
          <Form onSubmit={handleSubmit(onSubmitLogin)}>
            <Title>Sign in</Title>
            <SocialContainer>
              <SocialButton>
                <i className="fab fa-facebook-f"></i>
              </SocialButton>
              <SocialButton>
                <i className="fab fa-google-plus-g"></i>
              </SocialButton>
              <SocialButton>
                <i className="fab fa-linkedin-in"></i>
              </SocialButton>
            </SocialContainer>
            <Paragraph>or use your account</Paragraph>
            <Input
              className="w-full"
              id="taiKhoan_login"
              placeholder="tài khoản"
              register={register}
              name="taiKhoan_login"
              error={errors?.taiKhoan_login?.message}
            />
            <Input
              className="w-full"
              id="password"
              placeholder="Password"
              register={register}
              type="password"
              name="password"
              error={errors?.password?.message}
            />
            <Paragraph>Forgot your password?</Paragraph>
            <Button
              htmlType="submit"
              loading={isPendingLogin}
              style={{
                borderRadius: "20px",
                border: "1px solid #ff4b2b",
                backgroundColor: "#ff4b2b",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "bold",
                padding: "24px 47px",
                letterSpacing: "1px",
                transition: "transform 80ms ease-in",
                marginTop: "10px",
                textTransform: "uppercase",
              }}
            >
              Sign In
            </Button>
          </Form>
        </SignInContainer>
        <SignUpContainer className="sign-up-container">
          <Form onSubmit={handleSubmit(onSubmitRegister)}>
            <Title>Create Account</Title>
            <SocialContainer>
              <SocialButton>
                <i className="fab fa-facebook-f"></i>
              </SocialButton>
              <SocialButton>
                <i className="fab fa-google-plus-g"></i>
              </SocialButton>
              <SocialButton>
                <i className="fab fa-linkedin-in"></i>
              </SocialButton>
            </SocialContainer>
            <Paragraph>or use your email for registration</Paragraph>
            <Input
              className="w-full"
              register={register}
              id="hoTen"
              name="hoTen"
              type="text"
              placeholder="Họ tên"
              error={errors?.hoTen?.message}
            />
            <Input
              className="w-full"
              register={register}
              id="taiKhoan_register"
              name="taiKhoan_register"
              type="text"
              placeholder="Tài khoản"
              error={errors?.taiKhoan_register?.message}
            />
            <Input
              className="w-full"
              register={register}
              type="password"
              placeholder="Mật khẩu"
              id="matKhau"
              name="matKhau"
              error={errors?.matKhau?.message}
            />
            <Input
              className="w-full"
              register={register}
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              error={errors?.email?.message}
            />
            <Input
              className="w-full"
              register={register}
              id="soDT"
              name="soDT"
              type="text"
              placeholder="Số điện thoại"
              error={errors?.soDT?.message}
            />
            <Button
              htmlType="submit"
              loading={isPendingRegister}
              style={{
                borderRadius: "20px",
                border: "1px solid #ff4b2b",
                backgroundColor: "#ff4b2b",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "bold",
                padding: "24px 47px",
                letterSpacing: "1px",
                transition: "transform 80ms ease-in",
                marginTop: "10px",
                textTransform: "uppercase",
              }}
            >
              Sign Up
            </Button>
          </Form>
        </SignUpContainer>
        <OverlayContainer className="overlay-container">
          <Overlay className="overlay">
            <OverlayPanel className="overlay-panel">
              <Title>{signIn ? "Hello, Friend!" : "Welcome Back!"}</Title>
              <Paragraph>
                {signIn ? (
                  <>
                    Enter your personal details and start <br /> your journey
                    with us
                  </>
                ) : (
                  <>
                    To keep connected with us, please log in <br /> with your
                    personal info
                  </>
                )}
              </Paragraph>
              <GhostButton
                onClick={() => setSignIn(!signIn)}
                className="!mt-20"
              >
                {signIn ? "Sign Up" : "Sign In"}
              </GhostButton>
            </OverlayPanel>
          </Overlay>
        </OverlayContainer>
      </FormContainer>
    </Modal>
  );
};
