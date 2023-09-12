import React from "react";
import HomeLayout from "../../layout/home-layout/home-layout";
import "./course-details.scss";
import CourseDetailsCard from "../../components/course-details-card/CourseDetailsCard";
import { useQuery } from "@apollo/client";
import { GET_ALL_COURSE } from "../../graphql-queries/Course.queries";
import Loader from "../../components/loader/Loader";

const CourseDetails = () => {
  const { loading: isLoadingCourse, data: courseData } =
    useQuery(GET_ALL_COURSE);
  console.log(courseData);
  return (
    <HomeLayout>
      <Loader isLoading={isLoadingCourse} />
      <div className="course">
        <div className="course-text">
          <div className="instructorTitle">Instructor Application</div>
          <p className="there-are-many">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary,
          </p>
        </div>
        <p className="apply-for-text">Apply For</p>
        <hr className="horizontal-line" />
        <div className="row pb-4 course-container">
          {courseData?.getCourse.map((data) => (
            <CourseDetailsCard data={data} />
          ))}
        </div>
      </div>
    </HomeLayout>
  );
};

export default CourseDetails;
