import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = useSelector((data) => data.userData.token);

  const checkUserToken = () => {
    try {
      if (!token || token === undefined) {
        setIsLoggedIn(false);
        return navigate("/");
      } else {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Error while checking user token:", error);
      setIsLoggedIn(false);
      navigate("/");
    }
  };

  useEffect(() => {
    checkUserToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoggedIn ? <>{children}</> : null;
};

export default ProtectedRoute;
