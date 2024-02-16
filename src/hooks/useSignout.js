import toast from "react-hot-toast";
import { bacendkUrl } from "./useSignup";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";

const useSignout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signout = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${bacendkUrl}/api/auth/signout`, {
        credentials: "include",
      });
      setLoading(false);
      const data = await resp.json();
      console.log(data);
      if (data.error) {
        return toast.error(data.error);
      }
      localStorage.removeItem("chat_user");
      setAuthUser(null);
    } catch (err) {
      setLoading(true);
      console.log(err);
      return toast.error("Failed to Signout");
    }
  };
  return { signout, loading };
};

export default useSignout;
