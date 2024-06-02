import { useCallback, useState } from "react";
import axios from "@/utils/axios";

const useSendResultScan = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusSend, setStatusSend] = useState(0);

  const sendResultScan = useCallback(async (code: string) => {
    setIsLoading(true);
    const formData = new FormData();
    try {
      formData.append("code", code);
      const response = await axios.post("mahasiswa/scan", formData);
      setStatusSend(response.status);
    } catch (error) {
      console.error("Error sending result scan:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, statusSend, sendResultScan };
};

export default useSendResultScan;
