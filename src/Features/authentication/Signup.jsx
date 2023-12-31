import React from "react";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

const Signup = () => {
  const { signupcall, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signupcall(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }
  return (
    <div className="bg-white p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-1/2">
          {" "}
          <div className="flex justify-between items-center font-semibold px-10 m-3">
            <p>Full Name </p>
            <div>
              <input
                disabled={isLoading}
                type="text"
                className=" rounded-md border px-5 py-3"
                {...register("fullname", {
                  required: "This Filed is Required",
                })}
              />
              <p className="text-xs text-red-600">
                {errors?.fullname?.message}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center font-semibold px-10 m-3">
            <p>E-Mail </p>
            <div>
              <input
                disabled={isLoading}
                type="email"
                className=" rounded-md border px-5 py-3"
                {...register("email", {
                  required: "this Filed is Required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Enter a valid email",
                  },
                })}
              />
              <p className="text-xs text-red-600">{errors?.email?.message}</p>
            </div>
          </div>
          <div className="flex justify-between items-center font-semibold px-10 m-3">
            <p>Password </p>
            <div>
              <input
                disabled={isLoading}
                type="password"
                className=" rounded-md border px-5 py-3"
                value={"XeeaUlOrWfoekMvoppWz"}
                {...register("password", {
                  required: "this Filed is Required",
                  minLength: {
                    value: 6,
                    message: "Minimum Value is 2",
                  },
                })}
              />
              <p className=" text-xs text-red-600">
                {errors?.password?.message}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center font-semibold px-10 m-3">
            <p>Repeat Password </p>
            <div>
              <input
                disabled={isLoading}
                type="password"
                value={"XeeaUlOrWfoekMvoppWz"}
                className=" rounded-md border px-5 py-3"
                {...register("repeat", {
                  required: "this Filed is Required",
                  validate: (value) =>
                    value === getValues().password ||
                    "Password Needs to be Same as above",
                })}
              />
              <p className="text-xs text-red-600">{errors?.repeat?.message}</p>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <button
              className="px-8 text-white py-2 bg-green-500 rounded-md"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
