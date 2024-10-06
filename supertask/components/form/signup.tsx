"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, SignupType } from "./schema";
import { toastError, toastSuccess } from "../toastify/toast";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<SignupType>({
    resolver: zodResolver(SignupSchema),
  });
  const { errors } = formState;

  const onsubmit = async (data: SignupType) => {
    const res = await fetch(`${process.env.BACKEND_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: data.firstname,
        lastName: data.lastname,
        email: data.email,
        password: data.password,
        date: data.dateOfBirth,
        phone: data.phoneNumber,
      }),
    });

    if (res.ok) {
      console.log("User created successfully");
      router.push("/api/auth/signin");
      setIsLoading(false);
      toastSuccess("Account created successfully");
    }
    if (!res.ok) {
      console.log("Failed to create user");
      toastError("Failed to create user");
      setIsLoading(false);
    }
    if (!res.ok) {
      console.log("Failed to create user");
    }
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
            {...register("dateOfBirth")}
          />
          <p className="text-red-500 text-sm">
            {errors.dateOfBirth?.message as string} &nbsp;
          </p>
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
          <p className="text-red-500 text-sm">
            {errors.password?.message as string} &nbsp;
          </p>
        </div>
        <button
          type="submit"
          className="flex relative left-72 items-center px-8 py-1 rounded-full bg-customcolor-button1"
        >
          {isLoading ? <Loader className="animate-spin w-full" /> : "Submit"}
        </button>
      </form>
    </>
  );
};

export default Signup;
