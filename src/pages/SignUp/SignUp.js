import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const SignUp = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = (data) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <div className="h-[480px] my-60 flex justify-center items-center">
      <div className="w-96 p-8 shadow-lg">
        <h2 className="text-xl text-center mb-9">SignUp</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p role="alert" className="text-red-600">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email Required",
              })}
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p role="alert" className="text-red-600">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password Required",
                minLength: { value: 6, message: "Minimum 6 char" },
                maxLength: { value: 10, message: "Maximum 10 char" },
                pattern: {
                  value:
                    /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
                  message: "Password must be strong",
                },
              })}
              type="password"
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p role="alert" className="text-red-600">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="text-sm mb-7">forget Password?</span>
            </label>
          </div>
          <input
            type="submit"
            value="SignUp"
            className="btn btn-accent text-white mb-3 w-full"
          />
        </form>
        <p className="text-sm text-center mt-2 ">
          Allready have a Account?{" "}
          <Link to={"/login"} className="text-secondary">
            Login with Existing Accout
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

export default SignUp;
