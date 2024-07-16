import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/tx501-1@2x.png";
import PrimaryButton from "../components/PrimaryButton";
import Steper from "../components/Steper";
import RoleCard from "../components/RoleCard";
import seller from "../assets/seller.png";
import buyer from "../assets/buyer.png";
import sellerGreen from "../assets/sellerGreen.png";
import buyerGreen from "../assets/buyerGreen.png";
import { useStep } from "../context/StepContext";

const CreateYourAcoountOne = () => {
  const { setCurrentStep } = useStep();
  const [selectedRole, setSelectedRole] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
    
  const handleContinue = () => {
    if (selectedRole) {
      setCurrentStep(2);
      navigate("/step-two");
    } else {
      setError("Please select a role to continue.");
    }
  };

  return (
    <div className="w-full h-full   relative bg-[#101010] flex flex-col justify-start items-center p-6">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="background"
        src={backgroundImage}
      />
      <div className="w-full h-screen   flex flex-col justify-between items-center relative  p-4 md:p-5">
        <div className="flex flex-col justify-start items-center text-center md:text-left">
          <h1 className="font-roboto text-[24px] md:sm:lg:text-[32px] font-semibold leading-9 text-[#829BEF] mt-5">
            Create Your Account
          </h1>
          <p className="font-roboto text-[13px] sm:lg:md:text-[16px] font-normal leading-5 text-white mt-2">
            Your Secure Bridge to the World of USDT
          </p>
          <Steper />
          <p className="font-roboto text-[18px] md:text-[24px] font-semibold leading-5 text-white mt-10 md:lg:mt-5">
            Select Your Role
          </p>
          <div className="flex flex-raw  md:flex-row justify-center items-center mt-20  md:lg:mt-10 gap-5 md:gap-10 mb-10 md:mb-5">
            <RoleCard
              header="I’m a Buyer"
              imageSrc={selectedRole === "buyer" ? buyerGreen : buyer}
              listItems={[
                "You have LKR",
                "You Want USD",
                "Exchange your LKR to USDT",
              ]}
              isSelected={selectedRole === "buyer"}
              onClick={() => {
                setSelectedRole("buyer");
                setError("");
              }}
            />
            <RoleCard
              header="I’m a Seller"
              imageSrc={selectedRole === "seller" ? sellerGreen : seller}
              listItems={[
                "You Have LKR",
                "You Have USD",
                "Sell Your USD for Buyers",
              ]}
              isSelected={selectedRole === "seller"}
              onClick={() => {
                setSelectedRole("seller");
                setError("");
              }}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>

        <div className="flex flex-col justify-center items-center mt-5   w-full lg:w-2/4 mb-10">
          <PrimaryButton
            label="Continue"
            eventname={handleContinue}
            bgcolor="linear-gradient(90deg, #2d469a, #1e9e8c)"
            textcolor="#ffffff"
            type="submit"
            showArrow={true}
          />
          <div className="w-full flex flex-row justify-center mt-3">
            <h5 className="text-[14px] text-[#ffff] font-roboto">
              Already have an account?{" "}
              <span className="text-[#829BEF] font-roboto">
                <Link to="/">Login Now</Link>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateYourAcoountOne;
