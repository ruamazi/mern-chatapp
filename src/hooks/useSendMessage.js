import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";
import { bacendkUrl } from "./useSignup";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMsg = async (msg) => {
    toast.dismiss();
    if (!msg || msg.trim().length === 0) {
      return toast.error("You cannot send empty message");
    }
    setLoading(true);
    try {
      const resp = await fetch(
        `${bacendkUrl}/api/msg/send/${selectedConversation._id}`,
        {
          method: "POSt",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: msg }),
        }
      );
      setLoading(false);
      const data = await resp.json();
      if (data.error) {
        return toast.error(data.error);
      }
      setMessages([...messages, data]);
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error("Failed to send message");
    }
  };
  return { loading, sendMsg };
};

export default useSendMessage;
