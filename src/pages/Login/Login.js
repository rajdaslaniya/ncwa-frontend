import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";

import { mainHomePageLogo } from "../../assets/images";
import "./Login.css";
import InputField from "../../components/Common/InputField/InputFiled";
import ButtonComponent from "../../components/Common/Button/ButtonComponent";
import {
  CHECK_USER_DETAILS,
  CHECK_USER_EMAIL,
} from "../../graphql-queries/Authentication.queries";
import { useSelector, useDispatch } from "react-redux";
import { setUserEmail } from "../../store/actions/user.action";
import LoginPageLayout from "../../layout/login-page-layout/login-page-layout";

const EmailFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email is not valid")
    .trim()
    .required("Email is required"),
});

const PasswordFormSchema = Yup.object().shape({
  password: Yup.string().trim().required("Password is required"),
});

const Login = () => {
  const [showEmailForm, setShowEmailForm] = useState(true);
  const email = useSelector((data) => data.userData.email);
  const dispatch = useDispatch();

  const [checkUserIsPresent, { loading: loadingCheckUser, errorCheckUser }] =
    useMutation(CHECK_USER_EMAIL);

  const [login, { loading: loadingLogin, errorLogin }] =
    useMutation(CHECK_USER_DETAILS);

  const checkUserApiCall = async (email) => {
    const { data } = await checkUserIsPresent({
      variables: { email },
    });
    if (errorCheckUser) {
      toast.error("Something went to wrong please try again");
    }
    dispatch(setUserEmail(email));
    if (data.checkUserEmail.status === 200) {
      if (
        data.checkUserEmail.is_email_sent &&
        data.checkUserEmail.is_user_registered
      ) {
        setShowEmailForm(false);
      }
      if (!data.checkUserEmail.is_email_sent) {
        setShowEmailForm(false);
      }
      if (!data.checkUserEmail.is_user_registered) {
        console.log("registration");
        // navigation("/registration")
      }
    }
  };

  const loginApiCall = async (password) => {
    const { data } = await login({
      variables: { email, password },
    });
    if (errorLogin) {
      toast.error("Something went to wrong please try again");
    }

    if (
      data.loginUser.token &&
      data.loginUser.success &&
      data.loginUser.status === 200
    ) {
      toast.success("User login successfully");
    } else {
      toast.error("Invalid email or password please try again");
    }
  };

  return (
    <LoginPageLayout>
      <div className="instructor-login">
        <div className="display-flex justify-content-end align-items-center">
          <p className="right-side-text">
            Need assistance?{" "}
            <span className="orange-dark-color">Contact us for help</span>
          </p>
        </div>
        <div className="padding-10">
          <img src={mainHomePageLogo} className="main-logo-image" alt="logo" />
          <h3 className="form-title-text">Enter email for verification</h3>
          <p className="form-subtitle-text">
            {showEmailForm
              ? "Enter your email address. Use your Connect account email, if you have an account."
              : "Welcome back! Please enter your password."}
          </p>
          {showEmailForm ? (
            <Formik
              enableReinitialize={true}
              initialValues={{
                email: "",
              }}
              validationSchema={EmailFormSchema}
              onSubmit={(values) => {
                checkUserApiCall(values.email);
              }}
            >
              {({
                errors,
                values,
                touched,
                handleSubmit,
                handleChange,
                handleBlur,
              }) => {
                return (
                  <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="input-container">
                      <InputField
                        label="Email"
                        autoFocus
                        placeholder="Enter Email Address"
                        name="email"
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                        handleBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-5">
                      <ButtonComponent
                        isLoading={loadingCheckUser}
                        type="submit"
                        text="Next"
                      />
                    </div>
                  </form>
                );
              }}
            </Formik>
          ) : (
            <Formik
              enableReinitialize={true}
              initialValues={{
                password: "",
              }}
              validationSchema={PasswordFormSchema}
              onSubmit={(values) => {
                loginApiCall(values.password);
              }}
            >
              {({
                errors,
                values,
                touched,
                handleSubmit,
                handleChange,
                handleBlur,
              }) => {
                return (
                  <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="input-container">
                      <InputField
                        label="Password"
                        autoFocus
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={values.password}
                        error={errors.password}
                        touched={touched.password}
                        handleBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-5">
                      <ButtonComponent
                        isLoading={loadingLogin}
                        type="submit"
                        text="Next"
                      />
                    </div>
                  </form>
                );
              }}
            </Formik>
          )}
        </div>
      </div>
    </LoginPageLayout>
  );
};

export default Login;