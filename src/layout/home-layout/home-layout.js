import React from "react";
import Header from "../../components/header/Header";
import "./home-layout.scss";

const HomeLayout = ({ children }) => {
  return (
    <div className="home-layout">
      <Header />
      <div className="row g-0 children-container">
        <div className="left-image-group col-lg-2">
          <div className="left-image-1"></div>
          <div className="left-image-2"></div>
          <div className="left-image-3"></div>
        </div>
        <div className="col-lg-8 px-2 child-container">{children}</div>
        <div className="col-lg-2 right-image-group">
          <div className="right-image-1"></div>
          <div className="right-image-2"></div>
          <div className="right-image-3"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
