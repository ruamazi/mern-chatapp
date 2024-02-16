import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { bacendkUrl } from "./useSignup";
import { useState } from "react";

const useSignin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signin = async (username, password) => {
    toast.dismiss();
    if (!username || !password) {
      return toast.error("Username and password are required");
    }
    setLoading(true);
    try {
      const resp = await fetch(`${bacendkUrl}/api/auth/signin`, {
        method: "POSt",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
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
      toast.error("Failed to signin");
    }
  };

  return { loading, signin };
};

export default useSignin;
