import { useForm } from "react-hook-form";
import { useUserHook } from "../Features/authentication/useUserHook";
import { usePasswordUpdate } from "../Features/authentication/usePasswordUpdate";

const Accounts = () => {
  const { register, handleSubmit, reset, getValues, formState } = useForm({});
  const { errors } = formState;
  const { data } = useUserHook();

  const { mutate, isLoading } = usePasswordUpdate();
  const onSubmit = ({ password , email} ) => {
    mutate({password , email:data.email})
  };
  return (
    <div className="w-1/2">
      <p className="text-2xl font-semibold  px-10 py-4">
        Update your password 🔐
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        <div className="formflex">
          <p>E-mail Address</p>
          <div>
            <input
              type="email"
              className=" hover:cursor-not-allowed rounded-md border px-5 py-3"
              value={data.email}
              {...register("email")}
              disabled={true}
            />
          </div>
        </div>
        <div className="formflex">
          <p>Password New</p>
          <div>
            <input
              type="text"
              className=" rounded-md border px-5 py-3"
              {...register("password", {
                required: "required",
                minLength: {
                  value: 8,
                  message: "Minimum Value is 8",
                },
              })}
              disabled={isLoading}
            />
            {errors?.password?.message && (
              <div className="text-red-600">{errors.password.message}</div>
            )}
          </div>
        </div>
        <div className="formflex">
          <p>Re-enter Password </p>
          <div>
            <input
              type="text"
              disabled={isLoading}
              className=" rounded-md border px-5 py-3"
              {...register("rep", {
                required: "this Filed is Required",
                validate: (value) =>
                  value === getValues().password ||
                  "Password Needs to be Same as above",
              })}
            />
            {errors?.rep?.message && (
              <div className="text-red-600">{errors.rep.message}</div>
            )}
          </div>
        </div>
        <div className="text-end  py-4 gap-3">
          <button
            type="submit"
            className="px-3 py-2  mx-14  bg-green-500 rounded-md text-white font-semibold"
          >
            Update password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Accounts;
