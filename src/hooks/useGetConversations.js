import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { bacendkUrl } from "./useSignup";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  const getConversations = async () => {
    toast.dismiss();
    setLoading(true);
    try {
      const resp = await fetch(`${bacendkUrl}/api/user`, {
        credentials: "include",
      });
      setLoading(false);
      const data = await resp.json();
      if (data.error) {
        return toast.error(data.error);
      }
      setConversations(data);
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error("Failed to get users");
    }
  };

  useEffect(() => {
    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
