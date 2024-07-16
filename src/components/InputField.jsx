import React from "react";
import { Formik  , Field,Form, ErrorMessage} from "formik";

function InputField({label , name , type , placeholder, handleChange , values}) {
  return (
    <div className="form-field-container flex flex-col sm:mt-5 w-full space-y-2">
      <div className="form-field-lable sm:flex justify-between w-full">
        <span className="text-[#ffffff] text-[14px] md:lg:text-[16px] font-roboto">
         {label}
        </span>
        <ErrorMessage
          name={name}
          component="span"
          className="text-red-600 text-[12px] font-roboto"
        />
        <div className="">
          <span className="text-red-600 text-[12px] font-roboto"></span>
        </div>
      </div>
      <div className="form-field-input-container w-full rounded-[4px] bg-[#101010] h-[44px] md:lg:h-[44px] border-[1px] border-[#49C8B7]  flex flex-row justify-center items-center text-[#ffff] font-roboto ">
        <Field
          type={type}
          name={name}
          value ={values[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className=" font-roboto w-full h-full p-2 bg-transparent outline-none text-[12px] md:lg:text-[14px] form-field-input"
          required
        ></Field>
      </div>
    </div>
  );
}

export default InputField;
