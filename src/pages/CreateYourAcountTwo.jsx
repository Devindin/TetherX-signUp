import React, { useState ,useEffect} from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import Steper from "../components/Steper";
import InputPassword from "../components/InputPassword";
import backgroundImage from "../assets/tx501-1@2x.png";
import { useStep } from "../context/StepContext";

const CreateYourAcountTwo = () =>{
 
  
  const { setCurrentStep } = useStep();
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    setCurrentStep(3);
    navigate("/step-three");
  };

  const RegistrationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    contact: Yup.string()
      .matches(/[0-9]/, "only digits")
      .max(10, "only 10 digits")
      .min(10, "minimum 10 digits")
      .required("Required"),
    userID: Yup.string()
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lower letter")
      .matches(/[A-Z]/, "Password requires a upper letter")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lower letter")
      .matches(/[A-Z]/, "Password requires a upper letter")
      .matches(/[^\w]/, "Password requires a symbol")
      .required("Required"),
    retypepassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords must match")
      .required("Required"),
  });

  return (
    <div className="w-full h-full sm:lg:md:h-full relative bg-[#101010] flex flex-col justify-start items-center p-6">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="background"
        src={backgroundImage}
      />

      <div className="w-full h-full sm:lg:md:h-full p-5 flex flex-col justify-between items-center relative md:p-5">
        <div className="flex flex-col justify-start items-center">
          <h1 className="font-roboto text-[24px] md:text-[32px] font-semibold leading-9 text-[#829BEF] mt-5 text-left">
            Create Your Account
          </h1>
          <p className="font-roboto text-[13px] md:text-[16px] font-normal leading-5 text-white mt-2 text-left">
            Your Secure Bridge to the World of USDT
          </p>
          <Steper />
        </div>

        <div className="w-full p-5 h-screen flex justify-center items-center relative">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              contact: "",
              userID: "",
              password: "",
              retypepassword:"",
            }}
            validationSchema={RegistrationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleCreateAccount();
              setSubmitting(false);
            }}
          >
            {({ errors, touched, handleChange, values }) => (
              <Form className="flex flex-col w-full lg:w-1/2 md:w-1/2  space-y-2 md:lg:sm:space-y-4">
                <InputField
                  label="First name"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  handleChange={handleChange}
                  values={values}
                />
                <InputField
                  label="Last name"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  handleChange={handleChange}
                  values={values}
                />
                <InputField
                  label="Email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  handleChange={handleChange}
                  values={values}
                />
                <InputField
                  label="Contact"
                  name="contact"
                  type="text"
                  placeholder="Contact"
                  handleChange={handleChange}
                  values={values}
                />
                <InputPassword
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  handleChange={handleChange}
                  values={values}
                />
                <InputPassword
                  label=""
                  name="retypepassword"
                  type="password"
                  placeholder="Re-enter your password"
                  handleChange={handleChange}
                  values={values}
                />
                <div className="mt-10">
                  <PrimaryButton
                    label="Create Account"
                    bgcolor="linear-gradient(90deg, #2d469a, #1e9e8c)"
                    textcolor="#ffffff"
                    type="submit"
                    showArrow={true}
                    eventname={handleCreateAccount}
                  />
                </div>
                <div className="w-full flex flex-row justify-center mt-3">
                  <h5 className="lg:text-[14px] md:text-[14px] sm:text-[14px] text-[#ffff]">
                    Already have an account?{" "}
                    <span className="text-[#829BEF] lg:text-[14px] md:text-[14px] sm:text-[14px] ">
                      <Link to="/">Login Now</Link>
                    </span>
                  </h5>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreateYourAcountTwo;
