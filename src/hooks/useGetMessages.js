import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { bacendkUrl } from "./useSignup";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();

  const getMessages = async () => {
    toast.dismiss();
    setLoading(true);
    try {
      const resp = await fetch(
        `${bacendkUrl}/api/msg/${selectedConversation._id}`,
        {
          credentials: "include",
        }
      );
      setLoading(false);
      const data = await resp.json();
      if (data.error) {
        return toast.error(data.error);
      }
      setMessages(data);
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error("Failed to get messages");
    }
  };

  useEffect(() => {
    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id]);

  return { loading, messages };
};

export default useGetMessages;
