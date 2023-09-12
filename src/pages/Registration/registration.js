import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

import HomeLayout from "../../layout/home-layout/home-layout";
import "./registration.scss";
import {
  digitRegExp,
  getCharacterValidationError,
  phoneRegExp,
} from "../../utils/common";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../components/Common/input-field/InputFiled";
import TextArea from "../../components/Common/text-area/TextArea";
import RadioButtonGroup from "../../components/Common/radio-button/RadioButtonGroup";
import SelectDropdown from "../../components/Common/select-dropdown/SelectDropdown";
import ButtonComponent from "../../components/Common/button/ButtonComponent";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_NEW_REGISTRATION } from "../../graphql-queries/Authentication.queries";
import { toast } from "react-toastify";
import { setUserToken } from "../../store/actions/user.action";
import { GET_ALL_GROUP } from "../../graphql-queries/Group.queries";
import Loader from "../../components/loader/Loader";

const FormSchema = Yup.object().shape({
  email: Yup.string().email().trim().required("Email is required"),
  name: Yup.string().trim().required("Name is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Phone number is not valid")
    .matches(digitRegExp, "Phone number must be exactly 10 digits"),
  address: Yup.string().required("Address is required").trim(),
  isCouncilMember: Yup.string().default("yes"),
  mfaOptions: Yup.object()
    .shape({
      value: Yup.string().required("Select option is required"),
      label: Yup.string().required("Select option is required"),
    })
    .required("Select option is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
    .required("Please enter a password"),
});

const Registration = () => {
  const email = useSelector((data) => data.userData.email);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [
    userRegistration,
    { loading: isLoadingRegistration, error: isErrorRegistration },
  ] = useMutation(CREATE_NEW_REGISTRATION);

  const { loading: isLoadingGroup, data: groupData } = useQuery(GET_ALL_GROUP);

  const registrationApiCall = async (values) => {
    const { data } = await userRegistration({
      variables: {
        email: values.email,
        name: values.name,
        phoneNumber: values.phoneNumber,
        address: values.address,
        isCouncilMember: values.isCouncilMember === "yes" ? true : false,
        groupId: values.mfaOptions.value,
        password: values.password,
      },
    });
    if (isErrorRegistration) {
      toast.error("Something went to wrong please try again");
    }
    if (
      data.userRegistration.token &&
      data.userRegistration.success &&
      data.userRegistration.status === 200
    ) {
      dispatch(setUserToken(data.userRegistration.token));
      navigation("/course-details");
      toast.success("User registered successfully");
    } else {
      toast.error("Please provide valid information");
    }
  };

  return (
    <HomeLayout>
      <Loader isLoading={isLoadingGroup} />
      <div className="registration">
        <div className="registration-text">
          <div className="instructorTitle">INSTRUCTOR APPLICATION</div>
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
        <div className="row no-gutters ">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 regBox p-3 mb-5">
            <div className="regHead"> Enter Information</div>
            <Formik
              enableReinitialize={true}
              initialValues={{
                email: email,
                name: "",
                address: "",
                phoneNumber: null,
                isCouncilMember: "yes",
                mfaOptions: null,
                password: "",
              }}
              validationSchema={FormSchema}
              onSubmit={(values) => {
                registrationApiCall(values);
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
                    <div className="row no-gutters mt-5  formWrapper p-3">
                      <InputField
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        label="Email address"
                        disabled
                        error={errors.email}
                        touched={touched.email}
                        handleBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <InputField
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={values.name}
                        label="Name"
                        error={errors.name}
                        touched={touched.name}
                        handleBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <InputField
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        label="Password"
                        type="password"
                        error={errors.password}
                        touched={touched.password}
                        handleBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <InputField
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={values.phoneNumber}
                        label="Phone Number"
                        error={errors.phoneNumber}
                        touched={touched.phoneNumber}
                        handleBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <TextArea
                        id="address"
                        name="address"
                        placeholder="Address"
                        value={values.address}
                        label="Address"
                        error={errors.address}
                        touched={touched.address}
                        handleBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <RadioButtonGroup
                        label="National Council Member?"
                        error={errors.isCouncilMember}
                        name="isCouncilMember"
                        value={values.isCouncilMember}
                        setFieldValue={setFieldValue}
                        radioButtonItem={[
                          { checkBoxLabel: "Yes", val: "yes", id: "yes" },
                          { checkBoxLabel: "No", val: "no", id: "no" },
                        ]}
                      />
                      <SelectDropdown
                        label="Select"
                        value={values.mfaOptions}
                        error={errors.mfaOptions}
                        handleBlur={handleBlur}
                        setFieldValue={setFieldValue}
                        options={
                          groupData?.getGroup?.map((data) => ({
                            value: data.id,
                            label: data.name,
                          })) ?? []
                        }
                        name="mfaOptions"
                      />
                      <div className="mt-3">
                        <ButtonComponent
                          isLoading={isLoadingRegistration}
                          type="submit"
                          text="Next"
                        />
                      </div>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Registration;
