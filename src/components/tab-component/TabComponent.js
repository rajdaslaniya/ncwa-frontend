import React, { useRef, useState } from "react";
import { depCouncilSvg, illustrationSvg } from "../../assets/images";
import StepComponent from "../step-component/StepComponent";
import "./TabComponent.scss";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const copyRef = useRef(null);

  const handleInstructorTrainingClick = () => {
    const url = "http://mhfamissouri.org/";
    window.open(url, "_blank");
  };

  const handleSendMailClick = (email) => {
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  const handleCurrentInstructorClick = () => {
    const url =
      "https://www.mentalhealthfirstaid.org/become-an-instructor/applying-to-teen-mental-health-first-aid-information-and-resources/bring-tmhfa-to-teens-in-your-community/";
    window.open(url, "_blank");
  };

  return (
    <div className="pt-5 pb-2 tab-component">
      <h1 className="become-instructor-title">
        Applying For Instructor Training
      </h1>
      <div className="row selected-tab-row mt-3 mb-3 g-0">
        <div
          className={`col-lg-6 col-md-5 ${
            activeTab === 1 ? "selected-tab" : "unselected-tab"
          } p-2`}
          onClick={() => {
            setActiveTab(1);
          }}
        >
          Applying For Instructor Training
        </div>
        <div
          className={`col-lg-3 col-md-3 ${
            activeTab === 2 ? "selected-tab" : "unselected-tab"
          } p-2`}
          onClick={() => {
            setActiveTab(2);
          }}
        >
          New Applicants
        </div>
        <div
          className={`col-lg-3 col-md-4 ${
            activeTab === 3 ? "selected-tab" : "unselected-tab"
          } p-2`}
          onClick={() => {
            setActiveTab(3);
          }}
        >
          Current Instructors
        </div>
      </div>
      {activeTab === 1 && (
        <>
          <div className="row g-0 mb-1">
            <p className="common-text mb-1">
              Adult and Youth Mental Health First Aid (MHFA) Instructor
              candidates must successfully complete an application that ensures
              they have a general understanding of the program & the skills that
              make an Instructor successful, & affirm the requirements of the
              course. Please look for your application type below and review the
              instructions before starting the process.
            </p>
            <p className="common-text mb-1">
              Please submit an application to view the most current list of
              available courses in the MHFA Store.
            </p>
          </div>
          <div className="row g-0">
            <div className="col-lg-7">
              <h3 className="small-heading mb-2">
                Adult and Youth Mental Health First Aid Instructor Applicants –
                Missouri and Maryland Residents
              </h3>
              <p className="common-text mb-1">
                If you are a resident of Missouri, please visit our state
                partner’s website to apply for their in-state Instructor
                trainings. Open only to Missouri residents:{" "}
                <span
                  className="link-show"
                  onClick={handleInstructorTrainingClick}
                >
                  Apply for Maryland Instructor Training.
                </span>{" "}
                If you are a resident of Maryland, please visit their website to
                apply for their in-state Instructor trainings. Open only to
                Maryland residents:{" "}
                <span
                  className="link-show"
                  onClick={handleInstructorTrainingClick}
                >
                  Apply for Maryland Instructor Training.
                </span>
              </p>
            </div>
            <div className="col-lg-5">
              <img src={depCouncilSvg} alt="depression" className="dep-image" />
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-5">
              <img
                src={illustrationSvg}
                alt="illustration"
                className="dep-image"
              />
            </div>
            <div className="col-lg-7">
              <h3 className="small-heading mb-2">
                Teen Mental Health First Aid Instructor Applicants
              </h3>
              <p className="common-text mb-1">
                To apply for a teen Mental Health First Aid (tMHFA) Instructor
                training, please complete the tMHFA interest form to start the
                process. Whether you are an independent Instructor or are
                planning to teach tMHFA on behalf of an organization, you must
                speak with a member of our team before you can apply to become a
                tMHFA Instructor. Our team can assist in answering any questions
                you may have and advise you on next steps.
              </p>
            </div>
          </div>
        </>
      )}
      {activeTab === 2 && (
        <>
          <div className="row g-0 mb-1">
            <p className="common-text mb-1">
              Interested in applying to become an Adult or Youth MHFA
              Instructor? This document lays out the process from beginning to
              end.
            </p>
          </div>
          <div className="row g-0 mb-1">
            <p className="common-text mb-1">
              Start by creating an account in MHFA Connect the go-to platform
              for completing your certification, managing your future First
              Aider courses and accessing resources. If you already have a MHFA
              Connect account, please email{" "}
              <span
                className="link-show"
                ref={copyRef}
                onClick={() =>
                  handleSendMailClick("MHFAApplications@TheNationalCouncil.org")
                }
              >
                MHFAApplications@TheNationalCouncil.org
              </span>{" "}
              for access to the application.
            </p>
          </div>
          <div className="row g-0 mb-1">
            <p className="common-text mb-1">
              Current Mental Health First Aid Instructors seeking certification
              in teen Mental Health First Aid must complete{" "}
              <span
                className="link-show"
                onClick={handleCurrentInstructorClick}
              >
                the tMHFA interest form
              </span>{" "}
              to start the process. Whether you are an independent Instructor or
              are planning to teach tMHFA on behalf of an organization, you must
              speak with a member of our team before you can apply to become a
              tMHFA Instructor. Our team can assist in answering any questions
              you may have and advise you on next steps.
            </p>
          </div>
          <StepComponent index={1} text="CREATE AN ACCOUNT" />
          <StepComponent index={2} text="CONFIRM YOUR ACCOUNT" />
          <StepComponent index={3} text="COMPLETE THE APPLICATION" />
          <StepComponent index={4} text="REGISTER FOR A COURSE" />
          <StepComponent
            index={5}
            text="ORDER MATERIALS AND START YOUR PRE-WORK"
          />
          <div className="row g-0 mt-5 mb-1">
            <p className="common-text mb-1">
              After you successfully purchase your training, you will be
              directed back to MHFA Connect to begin your pre-work —
              approximately 8 hours of self-paced courses and videos that must
              be completed prior to the first day of live training. Please
              purchase your Instructor training materials at least 10 days prior
              to the date your live training begins. You can order them from the
              MHFA Connect Storefront. *Please note: Pre-work applies only to
              the specific training session. If you reschedule your training
              date, you will have to re-do the pre-work.
            </p>
          </div>
        </>
      )}
      {activeTab === 3 && (
        <>
          <div className="row g-0 mb-1">
            <p className="common-text mb-1">
              To earn a second certification in either Adult or Youth Mental
              Health First Aid, please email{" "}
              <span
                className="link-show"
                ref={copyRef}
                onClick={() =>
                  handleSendMailClick("MHFAApplications@TheNationalCouncil.org")
                }
              >
                MHFAApplications@TheNationalCouncil.org
              </span>{" "}
              for access to the appropriate application.
            </p>
          </div>
          <div className="row g-0">
            <p className="common-text mb-1">
              Current Mental Health First Aid Instructors seeking certification
              in teen Mental Health First Aid must complete{" "}
              <span
                className="link-show"
                onClick={handleCurrentInstructorClick}
              >
                the tMHFA interest form
              </span>{" "}
              to start the process. Whether you are an independent Instructor or
              are planning to teach tMHFA on behalf of an organization, you must
              speak with a member of our team before you can apply to become a
              tMHFA Instructor. Our team can assist in answering any questions
              you may have and advise you on next steps.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default TabComponent;
