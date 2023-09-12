import React, { useState } from "react";
import Assessment from "../../components/Assessment/Assessment";
import AssessmentQuestions from "../../data/AssessmentQuestions";
import MessageCard from "../../components/message-card/MessageCard";
import "./InstructorAssessment.scss";
import HomeLayout from "../../layout/home-layout/home-layout";
import { horizontalLine } from "../../assets/images";
import ButtonComponent from "../../components/Common/button/ButtonComponent";
const InstructorAssessment = () => {
  const [isAssessmentComplete, setIsAssessmentComplete] = useState(false);

  const SuccessfulAssessmentMessage = () => {
    const instructions = [
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium ",
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium ",
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium ",
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium ",
    ];
    return (
      <>
        <p className="instructionFont2">Please follow the Instructions below</p>
        <div className="border-top col-4"></div>
        <ul>
          {instructions.map((instruction) => {
            return <li className="instructionFont">{instruction}</li>;
          })}
        </ul>
      </>
    );
  };

  const FailureAssessmentMessage = () => {
    const failureMessage =
      " Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. ,";
    return (
      <>
        <div className="border-top col-4"></div>
        <p className="styles.instructionFont text-center py-5 ">
          {failureMessage}
        </p>
      </>
    );
  };

  return (
    <>
      <HomeLayout>
        <div className="instructor-assessment">
          <div className="instructorTitle">Instructor Assessment</div>
          <p className="there-are-many">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary,
          </p>

          <div>
            <img className="line" alt="Line" src={horizontalLine} />
          </div>

          <div
            className=" d-flex justify-content-center  "
            style={{ marginTop: "20px", paddingBottom: "20px" }}
          >
            {!isAssessmentComplete && (
              <Assessment
                title="Assessment"
                questions={AssessmentQuestions}
                setIsAssessmentComplete={setIsAssessmentComplete}
              />
            )}

            {isAssessmentComplete && (
              <MessageCard title="Thankyou">
                <SuccessfulAssessmentMessage />
                <ButtonComponent
                  style={{ marginTop: "2rem", marginBottom: "1rem" }}
                  text="Next"
                />
              </MessageCard>

              // <MessageCard title="Thankyou for your submission">
              //   <FailureAssessmentMessage />
              //   <Button
              //     text="REQUEST RE-EVALUATION"
              //     style={{ marginTop: "1rem", marginBottom: "1rem" }}
              //   />
              // </MessageCard>
            )}
          </div>
        </div>
      </HomeLayout>
    </>
  );
};
export default InstructorAssessment;
