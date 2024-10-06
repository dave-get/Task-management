"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, InputType } from "./schema";

const Signup = () => {
  const { register, handleSubmit, formState } = useForm<InputType>({
    resolver: zodResolver(SignupSchema),
  });
  const { errors } = formState;

  const onsubmit = () => {
    console.log("clicked");
  };
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(onsubmit)}
        className="space-y-3 w-full"
      >
        <div className="space-y-2">
          <p>First Name</p>
          <input
            type="text"
            placeholder="Enter first name"
            className="w-full h-10 pl-5 outline-none border border-customcolor-light-gray rounded"
            {...register("firstname")}
          />
          <p className="text-red-500 text-sm">
            {errors.firstname?.message as string}
          </p>
        </div>
        <div>
          <p>Last Name</p>
          <input
            type="text"
            placeholder="Enter last name"
            className="w-full h-10 pl-5 outline-none border border-customcolor-light-gray rounded"
            {...register("lastname")}
          />
          <p className="text-red-500 text-sm">
            {errors.lastname?.message as string}
          </p>
        </div>
        <div>
          <p>Email</p>
          <input
            type="text"
            placeholder="Enter Email"
            className="w-full h-10 pl-5 outline-none border border-customcolor-light-gray rounded"
            {...register("email")}
          />
          <p className="text-red-500 text-sm">
            {errors.email?.message as string}
          </p>
        </div>
        <div>
          <p>Date Of Birth</p>
          <input
            type="date"
            className="h-10 pl-5 outline-none border border-customcolor-light-gray rounded"
          />
        </div>
        <div>
          <p>Phone Number</p>
          <div className="flex">
            <select className="h-10 outline-none border border-customcolor-light-gray rounded">
              <option value="ETH">+251</option>
              <option value="USA">+1</option>
            </select>
            <input
              type="tel"
              className={`w-full h-10 pl-5 outline-none border border-customcolor-light-gray rounded`}
              {...register("phonenumber")}
            />
          </div>
          <p className="text-red-500 text-sm">
            {errors.phonenumber?.message as string}
          </p>
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full h-10 pl-5 outline-none border border-customcolor-light-gray rounded"
            {...register("password")}
          />
          <p>{errors.password?.message as string} &nbsp;</p>
        </div>
        <button
          type="submit"
          className="flex relative left-72 items-center px-8 py-1 rounded-full bg-customcolor-button1"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
