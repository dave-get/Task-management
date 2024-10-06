"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SigninSchema, SigninType } from "./schema";

const Signin = () => {
  const { register, handleSubmit, formState } = useForm<SigninType>({
    resolver: zodResolver(SigninSchema),
  });
  const { errors } = formState;

  const onsubmit = () => {
    console.log("clicked");
  };
  return (
    <>
      <form
        action=""
        className="w-full space-y-1"
        onSubmit={handleSubmit(onsubmit)}
      >
        <div className="w-full space-y-1">
          <p>Email or Phone No</p>
          <input
            type="text"
            placeholder="Email"
            className="w-full h-10 pl-5 outline-none border border-customcolor-light-gray rounded"
            {...register("email")}
          />
          <p className="text-red-500 text-sm">
            {errors.email?.message as string} &nbsp;
          </p>
        </div>
        <div className="w-full space-y-1">
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            className="w-full h-10 pl-5 outline-none border border-customcolor-light-gray rounded"
            {...register("password")}
          />
          <p className="text-red-500 text-sm">
            {errors.password?.message as string} &nbsp;
          </p>
        </div>
        <button
          type="submit"
          className="w-full text-white font-bold py-2 rounded-full bg-customcolor-waterblue"
        >
          SignIn
        </button>
      </form>
    </>
  );
};

export default Signin;
