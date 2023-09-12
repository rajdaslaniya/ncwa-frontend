import React from "react";
import { useNavigate } from "react-router-dom";

import "./CourseDetailsCard.scss";
import MediumButtonComponent from "../Common/button/MediumButtonComponent";

const CourseDetailsCard = ({ data }) => {
  const navigation = useNavigate();

  const redirectToAssessment = () => {
    navigation("/assessment");
  };

  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
      <div className="course-details-component">
        <label className="title">{data.name}</label>
        <p className="description" title={data.description}>
          {data.description}
        </p>
        <MediumButtonComponent onClick={redirectToAssessment} text="Apply" />
      </div>
    </div>
  );
};

export default CourseDetailsCard;
