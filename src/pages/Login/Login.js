import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="h-[480px] my-60 flex justify-center items-center">
      <div className="w-96 p-8 shadow-lg">
        <h2 className="text-xl text-center mb-9">Login</h2>
        <form
          onSubmit={handleSubmit((data) => {
            setData(JSON.stringify(data));
          })}
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              // placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email?.type === "required" && (
              <p role="alert" className="text-red-500">
                Email is required
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password required",
                minLength: { value: 6, message: "Minimum 6 char" },
              })}
              type="password"
              // placeholder="Super Secret password"
              className="input input-bordered w-full "
            />
            {errors.password && errors.password.type === "required" && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className="text-red-600">{errors.password.message}</span>
            )}

            <label className="label">
              <span className="text-sm mb-7">forget Password?</span>
            </label>
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-accent text-white mb-3 w-full"
          />
        </form>
        <p className="text-sm text-center mt-2 ">
          New to Doctors Portal?{" "}
          <Link to={"/signup"} className="text-secondary">
            Create new account
          </Link>
        </p>

        <div className="flex my-6  items-center justify-center">
          <hr className="bg-primary w-full h-[2px] mr-3" />
          <span>{"   "}</span>
          <span>OR</span>
          <span>{"   "}</span>
          <hr className="bg-primary w-full h-[2px] ml-3" />
        </div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
