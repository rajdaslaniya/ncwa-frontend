import React from "react";
import "./CourseDetailsCard.scss";
import MediumButtonComponent from "../Common/button/MediumButtonComponent";

const CourseDetailsCard = ({ data }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
      <div className="course-details-component">
        <label className="title">{data.name}</label>
        <p className="description" title={data.description}>
          {data.description}
        </p>
        <MediumButtonComponent text="Apply" />
      </div>
    </div>
  );
};

export default CourseDetailsCard;
