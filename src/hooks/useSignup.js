import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const bacendkUrl = import.meta.env.VITE_BACK_URL;

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async (inputs) => {
    toast.dismiss();
    const { fullName, username, password, confirmPassword, gender } = inputs;
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return toast.error("All fields are required");
    }
    if (password !== confirmPassword) {
      return toast.error("Password not match");
    }
    setLoading(true);
    try {
      const resp = await fetch(`${bacendkUrl}/api/auth/signup`, {
        method: "POSt",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      setLoading(false);
      const data = await resp.json();
      if (data.error) {
        return toast.error(data.error);
      }
      localStorage.setItem("chat_user", JSON.stringify(data));
      setAuthUser(data);
    } catch (err) {
      setLoading(false);
      console.log(err);
      return toast.error("Something went wrong");
    }
  };

  return { loading, signup };
};

export default useSignup;
