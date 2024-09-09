// import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";
import { Input } from "components";
import { Modal } from "antd";
import {
  FormContainer,
  SignUpContainer,
  SignInContainer,
  Form,
  Button,
  Title,
  SocialContainer,
  SocialButton,
  Paragraph,
  OverlayContainer,
  Overlay,
  OverlayPanel,
  GhostButton,
} from "./AuthStyles";
// import { LoginSchema, RegisterSchema } from "schema";
// import { useAppDispatch } from "store";
// import { loginThunk } from "store/managementUser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { handleError } from "utils";

export const AuthTemplate = ({ isOpen, onCloseModal }) => {
  const [signIn, setSignIn] = useState(true);
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    // resolver: zodResolver(LoginSchema || RegisterSchema),
  });

  const onSubmitLogin = async (values) => {
    console.log(values)
    // try {
    //   dispatch(loginThunk(values))
    //     .unwrap()
    //     .then(() => {
    //       onCloseModal();
    //       toast.success("Login Success");
    //       navigate("/");
    //     });
    // } catch (error) {
    //   handleError(error);
    // }
  };

  const onSubmitRegister = async (data) => {
    try {
      console.log(data);
      reset();
    } catch (error) {
      console.log(error);
    }
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
            Uncomment these lines to use inputs for registration
            
            <Input
            className="w-full"
              {...register("taiKhoan", {
                required: "(*) Tài khoản không được để trống",
              })}
              type="text"
              placeholder="Name"
            />
            <Input
            className="w-full"
              {...register("email", {
                required: "(*) Email không được để trống",
              })}
              type="email"
              placeholder="Email"
            />
            <Input
            className="w-full"
              {...register("matKhau", {
                required: "(*) Mật khẩu không được để trống",
              })}
              type="password"
              placeholder="Password"
            />
           
            <Button type="submit">Sign Up</Button>
          </Form>
        </SignUpContainer>

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
              id="email"
              placeholder="Email"
              register={register}
              name="email"
              error={errors?.email?.message}
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
            <Button type="submit">Sign In</Button>
          </Form>
        </SignInContainer>

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

