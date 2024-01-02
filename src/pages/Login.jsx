import React, { useState } from "react";
import pic from "../data/Nyumbani_Hotel_Logo.png";
import { useLogin } from "../Features/authentication/useLogin";
import MiniLoader from "../ui/MiniLoader";
const Login = () => {
  const [email, setemail] = useState("mrusmanmughal1@gmail.com");
  const [password, setpassword] = useState("99999999");
  const { mutate, isLoading } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return null;
    mutate({ email, password });
  };
  return (
    <div className="bg-slate-100 h-screen py-4 font-semibold">
      <div className="w-1/3 mx-auto  flex justify-center flex-col">
        <img src={pic} alt="" width={200} className="mx-auto" />
        <h1 className="font-bold  text-2xl text-center font-serif py-4">
          Log in To Your Account
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="w-1/3  mx-auto gap-3 bg-white rounded-2xl p-10 flex flex-col border">
          <p>Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            disabled={isLoading}
            className="w-full border py-2 px-2  disabled:cursor-not-allowed "
          />

          <p>Password</p>
          <input
            disabled={isLoading}

            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="w-full border py-2 px-2  disabled:cursor-not-allowed "
          />
          <button className="bg-purple-950 text-white flex justify-center p-2  disabled:cursor-not-allowed " disabled={isLoading} type="submit">
            {isLoading ? <MiniLoader width={15} /> : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
