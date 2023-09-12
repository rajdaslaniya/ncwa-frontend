import { toast } from "react-toastify";
import * as Yup from "yup";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import OtpInput from "react-otp-input";

import { mainHomePageLogo, ottGroupSvg } from "../../assets/images";
import "./otp.scss";
import {
  RESEND_OTP,
  VERIFY_OTP,
} from "../../graphql-queries/Authentication.queries";
import { useSelector } from "react-redux";
import SmallButtonComponent from "../../components/Common/button/SmallButtonComponent";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const OtpFormSubmit = Yup.object().shape({
  otp: Yup.string()
    .trim()
    .matches(/^\d{6}$/, "Otp must be a 6-digit number")
    .required("Otp is required"),
});

const Otp = () => {
  const email = useSelector((data) => data.userData.email);
  const navigation = useNavigate();

  const [verifyOtp, { loading: isVerifyOtpLoading, error: errorVerifyOtp }] =
    useMutation(VERIFY_OTP);

  const [resendOtp, { loading: isResendLoading, error: errorResendOtp }] =
    useMutation(RESEND_OTP);

  const resendOtpApiCall = async () => {
    const { data } = await resendOtp({
      variables: { email },
    });
    if (errorResendOtp) {
      toast.error("Something went to wrong please try again");
    }
    console.log(data);
    if (data.resendOtp.status === 200) {
      if (data.resendOtp.success && data.resendOtp.is_email_sent) {
        toast.success("Otp send successfully in mail");
      }
    } else {
      toast.error("Something went to wrong please try again");
    }
  };

  const verifyOtpApiCall = async (otp) => {
    const { data } = await verifyOtp({
      variables: { email, otp },
    });
    if (errorVerifyOtp) {
      toast.error("Something went to wrong please try again");
    }
    if (data.verifyOtp.status === 200) {
      if (data.verifyOtp.success) {
        toast.success("Complete your registration process");
        navigation("/registration");
      }
    } else {
      toast.error("Please enter valid otp");
    }
  };

  const redirectToLoginPage = () => {
    navigation("/");
  };

  return (
    <div className="row otp-row g-0">
      <Loader isLoading={isResendLoading} />
      <div className="col-lg-6 col-md-6 col-12 p-5 order-2 order-sm-1 order-lg-1  otp-left-group">
        <img src={ottGroupSvg} className="email-send-image" alt="email-send" />
      </div>
      <div className="col-lg-6 col-md-6 col-12 p-5 order-1 order-sm-2 order-lg-2">
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
                verifyOtpApiCall(values.otp);
              }}
            >
              {({ errors, values, handleSubmit, setFieldValue }) => {
                return (
                  <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="input-otp-container mt-5 ">
                      <OtpInput
                        value={values.otp}
                        onChange={(value) => setFieldValue("otp", value)}
                        numInputs={6}
                        renderSeparator={(index) =>
                          index === 2 ? (
                            <span className="p-1 desk">-</span>
                          ) : (
                            <span className="p-1"></span>
                          )
                        }
                        renderInput={(props) => (
                          <input {...props} className="otp-input" />
                        )}
                      />
                      {errors.otp && (
                        <p className="error-message">{errors.otp}</p>
                      )}
                    </div>
                    <div className="mt-5 d-flex align-items-center justify-content-center">
                      <SmallButtonComponent
                        isLoading={isVerifyOtpLoading}
                        type="submit"
                        text="VERIFY"
                      />
                    </div>
                  </form>
                );
              }}
            </Formik>

            <p className="resent-otp-text">
              Didn’t receive code?{" "}
              <span className="resend-dark-text" onClick={resendOtpApiCall}>
                Resend Code
              </span>
            </p>
            <p className="change-email-text">
              <span className="cursor-pointer" onClick={redirectToLoginPage}>
                Change Email
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
