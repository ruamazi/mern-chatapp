import { Link } from "react-router-dom";
import { useState } from "react";
import GenderCheckbox from "../components/GenderCheckbox";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(inputs);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
      backdrop-filter backdrop-blur-sm bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-6">
          Join to
          <span className="glow"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
          <div>
            <input
              type="text"
              placeholder="Your name"
              className="w-full input input-bordered h-10 placeholder:text-slate-500"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10 placeholder:text-slate-500"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Choose Password"
              className="w-full input input-bordered h-10 placeholder:text-slate-500"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 placeholder:text-slate-500"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <div>
            <button
              className="btn btn-block btn-sm border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
          <div className="text-sm mt-4 inline-block">
            Already have an account?{" "}
            <Link to="/signin" className="hover:underline hover:text-blue-300">
              {" "}
              Sign-in..
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
