"use client";
import { Button, Col, Row } from "antd";
import loginImage from "../../assets/loginImge.png";
import Image from "next/image";
import FormInput from "@/components/Forms/FormInput";
import Form from "@/components/Forms/Form";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { isLoggedIn, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  // console.log(isLoggedIn());
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      //   console.log(res);
      if (res?.accessToken) {
        router.push("/profile");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Row
      style={{
        minHeight: "100vh",
      }}
      justify="center"
      align="middle"
    >
      <Col sm={12} md={14} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>

      <Col sm={12} md={10} lg={8}>
        <h1
          style={{
            marginBottom: "1rem",
          }}
        >
          First Login Your Account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="Your Id" />
            </div>
            <div
              style={{
                margin: "18px 0",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Your Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
