import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const IsOtpVerified = ({ children }) => {
  const navigate = useNavigate();
  const isOtpVerify = useSelector((data) => data.userData.isEmailVerify);

  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const checkIsOtpVerified = async () => {
    if (isOtpVerify) {
      setIsOtpVerified(true);
    } else {
      setIsOtpVerified(false);
      return navigate("/");
    }
  };

  useEffect(() => {
    checkIsOtpVerified();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isOtpVerified ? <>{children}</> : null;
};

export default IsOtpVerified;
