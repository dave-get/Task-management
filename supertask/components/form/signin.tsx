"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SigninSchema, SigninType } from "./schema";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Loader } from "lucide-react";
import { toastError, toastSuccess } from "../toastify/toast";

const Signin = () => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<SigninType>({
    resolver: zodResolver(SigninSchema),
  });
  const { errors } = formState;

  const onsubmit = async (data: SigninType) => {
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (!result?.ok) {
        setLoading(false);
        toastError("invalid credentials");
      }

      if (result?.ok) {
        setLoading(false);
        toastSuccess("Login Successful");
        const parsedUrl = new URL(result?.url || "/");
        const callbackUrl = parsedUrl.searchParams.get("callbackUrl");
        router.push(callbackUrl || "/bank-dash");
      }
    } catch (error) {
      toastError("invalid credentials");
      return error;
    }
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
          {isLoading ? <Loader className="animate-spin w-full" /> : "SignIn"}
        </button>
      </form>
    </>
  );
};

export default Signin;
