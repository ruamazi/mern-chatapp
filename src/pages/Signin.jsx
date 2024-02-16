import { useState } from "react";
import { Link } from "react-router-dom";
import useSignin from "../hooks/useSignin";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, signin } = useSignin();

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
      backdrop-filter backdrop-blur-sm bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-6">
          Signin to
          <span className="glow"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <input
              type="text"
              placeholder="username"
              className="w-full input input-bordered h-10 placeholder:text-slate-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered h-10 placeholder:text-slate-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-block btn-sm" disabled={loading}>
            {loading ? (
              <span className="loading loading-spinner "></span>
            ) : (
              "Login"
            )}
          </button>
          <div className="text-sm mt-4 inline-block">
            {"Don't"} have an account?{" "}
            <Link to="/signup" className="hover:underline hover:text-blue-300">
              {" "}
              Join now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
