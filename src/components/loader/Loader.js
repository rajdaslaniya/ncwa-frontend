import React from "react";
import "./Loader.scss";

const Loader = ({ isLoading }) => {
  return isLoading ? (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  ) : (
    <></>
  );
};

export default Loader;
