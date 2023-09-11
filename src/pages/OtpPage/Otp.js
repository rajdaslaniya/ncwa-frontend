import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";

import { mainHomePageLogo } from "../../assets/images";
import "./Otp.css";
import { CHECK_USER_EMAIL } from "../../graphql-queries/Authentication.queries";
import { useSelector, useDispatch } from "react-redux";
import { setUserEmail } from "../../store/actions/user.action";
import SmallButtonComponent from "../../components/Common/Button/SmallButtonComponent";
import LoginPageLayout from "../../layout/login-page-layout/login-page-layout";

const OtpFormSubmit = Yup.object().shape({
  otp: Yup.string()
    .trim()
    .matches(/^\d{6}$/, "OTP must be a 6-digit number")
    .required("otp is required"),
});

const Otp = () => {
  const email = useSelector((data) => data.userData.email);
  const dispatch = useDispatch();

  const [checkUserIsPresent, { loading: loadingCheckUser, errorCheckUser }] =
    useMutation(CHECK_USER_EMAIL);

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
      }
      if (!data.checkUserEmail.is_email_sent) {
      }
      if (!data.checkUserEmail.is_user_registered) {
        console.log("registration");
        // navigation("/registration")
      }
    }
  };

  return (
    <LoginPageLayout>
      <div className="otp-group">
        <div className="display-flex justify-content-end align-items-center">
          <p className="right-side-text">
            Need assistance?{" "}
            <span className="orange-dark-color">Contact us for help</span>
          </p>
        </div>
        <div className="padding-10">
          <div className="d-flex align-items-center justify-content-center w-100">
            <img
              src={mainHomePageLogo}
              className="main-logo-image"
              alt="logo"
            />
          </div>
          <p className="form-mail-text">
            An application code has been sent to
            <span className="orange-dark-big-color"> {email}</span>
          </p>

          <p className="email-text">Kindly check your email</p>
          <p className="otp-text">Enter Your Application Code</p>

          <Formik
            enableReinitialize={true}
            initialValues={{
              otp: "",
            }}
            validationSchema={OtpFormSubmit}
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
                  <div className="mt-5 d-flex align-items-center justify-content-center">
                    <SmallButtonComponent
                      isLoading={loadingCheckUser}
                      type="submit"
                      text="VERIFY"
                    />
                  </div>
                </form>
              );
            }}
          </Formik>

          <p className="resent-otp-text">
            Didn’t receive code?
            <span className="dark-orange-text"> Resend Code</span>
          </p>
          <p className="change-email-text">Change Email?</p>
        </div>
      </div>
    </LoginPageLayout>
  );
};

export default Otp;
