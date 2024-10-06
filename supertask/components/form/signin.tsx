import React from "react";

const Signin = () => {
  return (
    <>
      <form action="" className="w-full space-y-4">
        <div className="w-full space-y-1">
          <p>Email or Phone No</p>
          <input
            type="text"
            placeholder="Email"
            className="w-full h-10 pl-5 outline-none border border-customcolor-light-gray rounded"
          />
        </div>
        <div className="w-full space-y-1">
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            className="w-full h-10 pl-5 outline-none border border-customcolor-light-gray rounded"
          />
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
