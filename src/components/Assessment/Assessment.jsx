import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Stepper, Step } from "react-form-stepper";

import "./Assessment.scss";
import "./stepper.scss";
import RadioButton from "../Common/radio-button/RadioButton";
import ButtonComponent from "../Common/button/ButtonComponent";

const Assessment = ({ title, questions, setIsAssessmentComplete }) => {
  const [questionNumber, setQuestionNumber] = useState(0);

  let totalQuestions = questions?.length;

  const [currentQuestion, setCurrentQuestion] = useState({});

  const userSelection = () => {
    const initialValues = Array.from({ length: totalQuestions }, (_, index) => {
      return {
        questionNumber: index + 1,
        answer: "",
      };
    });

    return initialValues;
  };

  useEffect(() => {
    setCurrentQuestion(questions[1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextQn = () => {
    if (questionNumber + 1 < totalQuestions) {
      setQuestionNumber(questionNumber + 1);
      setCurrentQuestion(questions[questionNumber + 1]);
    } else {
      setIsAssessmentComplete(true);
      return;
    }
  };
  return (
    <>
      <div
        className={`col-lg-6  col-md-8 col-sm-8  row d-flex align-items-center justify-content-center assessment-card`}
      >
        <div className="d-flex align-items-center justify-content-center w-100 p-3">
          <p className="m-auto HeaderTitle">{title}</p>
        </div>
        <div class="w-100 HeaderLine"></div>

        <div className="p-4">
          <Stepper
            connectorStateColors
            size={1}
            circleFontSize="2px"
            className="custom-stepper"
            connectorStyleConfig={{
              disabledColor: "#ECECEC",
              completedColor: "#EA4B22",
              activeColor: "#EA4B22",
              size: 4,
            }}
            styleConfig={{
              activeBgColor: "#EA4B22",
              inactiveBgColor: "#D5D5D5",
              size: 10,
            }}
            style={{
              padding: "0px",
            }}
          >
            {Array.from({ length: totalQuestions }, (_, index) => {
              return (
                <Step
                  active={index <= questionNumber ? true : false}
                  className={
                    index === questionNumber ? "shadowOutlineCurrentQn" : ""
                  }
                ></Step>
              );
            })}
          </Stepper>

          <div style={{ padding: "30px 25px 0px 25px" }}>
            <div className="d-flex justify-content-between ">
              <p className="QuestionFontStyle">
                Question {questionNumber + 1}:
              </p>
              <p className="QuestionFontStyle">
                <span style={{ color: "#EA4B22" }}>{questionNumber + 1}</span>/
                {totalQuestions}
              </p>
            </div>
            <div>
              <p className="QuestionFontStyle">{currentQuestion?.question}</p>
              <div style={{ position: "relative" }}>
                <Formik
                  enableReinitialize={true}
                  initialValues={{ answers: userSelection() }}
                  onSubmit={(values) => {
                    console.log(values);
                    handleNextQn();
                  }}
                >
                  {({
                    errors,
                    values,
                    touched,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    setFieldValue,
                  }) => {
                    return (
                      <form onSubmit={handleSubmit} autoComplete="off">
                        {currentQuestion?.options?.map((option, index) => {
                          return (
                            <div className="d-flex gap-2 align-items-center mb-3 p-2">
                              <label>
                                <RadioButton
                                  name={`answers[${questionNumber}].answer`}
                                  id={`answers[${questionNumber}].questionNumber_Option${index}`}
                                  value={values.answers[questionNumber].answer}
                                  setFieldValue={setFieldValue}
                                  checkBoxLabel={option}
                                  val={option}
                                />
                              </label>
                            </div>
                          );
                        })}
                        <ButtonComponent
                          text="Next"
                          type="submit"
                          style={{
                            marginTop: "30px",
                          }}
                        />
                      </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assessment;
