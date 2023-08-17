import { useState } from "react";
import ScheduleApi from "../services/api/ScheduleApi";
import { ISchedule } from "../interfaces/ISchedule";

const useSchedule = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [schedules, setSchedules] = useState<ISchedule[]>([]);

  const getSchedules = async () => {
    try {
      setLoading(true);
      setError("");
      const { items } = await ScheduleApi.getAll();
      setSchedules(items);
    } catch (error) {
      setError(error as string);
    } finally {
      setLoading(false);
    }
  };

  return {
    getSchedules,
    loading,
    error,
    schedules,
  };
};

export default useSchedule;
