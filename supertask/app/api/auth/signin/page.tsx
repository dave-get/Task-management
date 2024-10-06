"use client";
import Signin from "@/components/form/signin";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SigninPage = () => {
  return (
    <div className="flex h-screen px-20 py-10 space-x-5 relative">
      <Image
        src="/image/background1.svg"
        alt=""
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-30 z-10"
      />
      <div className="flex flex-col w-2/3 items-center justify-between py-10 relative">
        <p className="text-customcolor-blue font-kameron font-extrabold text-7xl">
          Super Task
        </p>
        <Image
          src="/image/signin.svg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />
        <p>Achieve More Every Day</p>
      </div>
      <div className="flex flex-col w-2/3 items-center px-10 py-10 space-y-5 z-20">
        <p className="font-kameron text-customcolor-text-gray text-6xl">
          Sign In
        </p>
        <Signin />
        <Link href="" className="w-full text-left text-customcolor-blue">
          forgot password?
        </Link>
        <div className="flex w-full space-x-3">
          <p>donot have account? </p>
          <Link href="/api/auth/signup" className="text-customcolor-blue">
            SignUp
          </Link>
        </div>
        <div className="flex items-center w-full justify-between">
          <div className="flex bg-slate-100 rounded px-2 py-2 space-x-1">
            <Image src="/icons/google.svg" alt="" width={24} height={24} />
            <p>Sign Up with Google</p>
          </div>
          <div className="flex bg-slate-100 rounded px-2 py-2 space-x-1">
            <Image src="/icons/facebook.svg" alt="" width={24} height={24} />
            <p>Sign Up with Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
