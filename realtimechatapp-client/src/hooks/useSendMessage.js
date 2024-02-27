import { useState } from "react";
import useConversation from "../zustand/useConversation";
import api from "../api/axiosConfig";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState();
  const { messages, setMessages, selectedConversation } = useConversation();
  
  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const response = await api.post(`/api/v1/send/${selectedConversation._id}`, {
        message
      })
      const data = response.data;
      if (data.error) {
        throw new Error(data.error);
      }
      // spread the old messages and include the new one 
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  }
  return { loading, sendMessage };
}

export default useSendMessage