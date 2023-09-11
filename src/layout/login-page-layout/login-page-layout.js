import React from "react";
import TabComponent from "../../components/BecomeInstructor/TabComponent/TabComponent";
import "./login-page-layout.css";

const LoginPageLayout = ({ children }) => {
  return (
    <div className="row login-row g-0">
      <div className="col-lg-6 col-md-6 col-12 p-5 order-2 order-sm-2 order-lg-1  login-left-group">
        <TabComponent />
      </div>
      <div className="col-lg-6 col-md-6 col-12 p-5 order-1 order-sm-1 order-lg-2">
        {children}
      </div>
    </div>
  );
};

export default LoginPageLayout;
