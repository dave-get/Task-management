"use client";
import Signup from "@/components/form/signup";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
  return (
    <div className="flex space-x-10 pl-20 pr-20 pt-12 pb-10 bg-customcolor-sky-blue">
      <div className="flex-none w-3/6 relative">
        <Image
          src="./image/signup.svg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0"
        />
        <div className="flex top-2 left-5 right-5 absolute space-x-5 items-center">
          <p className="font-bold font-inter text-customcolor-light-gray text-xl mt-2">
            <i>Unlock Your Productivity Potential</i>
          </p>
          <h1 className="text-6xl font-kameron w-2/3 text-right text-customcolor-text-gray">
            Sign up
          </h1>
        </div>
        <div className="flex space-x-2 absolute bottom-2 right-5">
          <p className="text-customcolor-text-gray">Already have an account?</p>
          <Link href="/api/auth/signin" className="text-customcolor-blue">
            Login
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-4/6 items-center py-5 space-y-5 px-10">
        <div className="flex items-center w-full justify-between">
          <div className="flex bg-white px-2 py-2 space-x-1">
            <Image src="./icons/google.svg" alt="" width={24} height={24} />
            <p>Sign Up with Google</p>
          </div>
          <div className="flex bg-white px-2 py-2 space-x-1">
            <Image src="./icons/facebook.svg" alt="" width={24} height={24} />
            <p>Sign Up with Facebook</p>
          </div>
        </div>
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
