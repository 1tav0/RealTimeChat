import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../api/axiosConfig";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {

      setLoading(true);
      try {
        const response = await api.get('/api/v1/users');
        const data = response.data;
        // console.log(data);
        if (data.error) {
          console.log(data.error);
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setLoading(false);
      }
    }
    getConversations();

  }, []);
  console.log(conversations);

  return { loading, conversations }
}

export default useGetConversations;