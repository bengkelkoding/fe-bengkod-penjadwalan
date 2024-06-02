import { useCallback, useState } from "react";
import axios from "@/utils/axios";
import { DataStudentSchedule } from "@/model/ModelStudentSchedule";
import { ScheduleDetail } from "@/model/ModelStudentScheduleDetail";

const useGetStudentSchedule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [schedules, setSchedules] = useState<DataStudentSchedule[]>([]);
  const [scheduleDetails, setScheduleDetails] = useState<ScheduleDetail>();

  const getSchedule = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("mahasiswa/schedules");
      if (response.status === 200) {
        setSchedules(response.data.payload);
      }
    } catch (error) {
      console.error("Error fetching schedules:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getScheduleDetail = useCallback(async (id: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`mahasiswa/schedules/${id}`);
      if (response.status === 200) {
        setScheduleDetails(response.data.payload);
      }
    } catch (error) {
      console.error("Error fetching schedules:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, schedules, scheduleDetails, getSchedule, getScheduleDetail };
};

export default useGetStudentSchedule;
