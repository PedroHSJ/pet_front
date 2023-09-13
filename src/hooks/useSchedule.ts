import { useState } from 'react';
import ScheduleApi from '../services/api/ScheduleApi';
import { ISchedule, IScheduleGetByParams } from '../interfaces/ISchedule';
import { handleGetErrorMessage } from '../utils';

const useSchedule = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [schedules, setSchedules] = useState<ISchedule[]>([]);

    const getSchedules = async () => {
        try {
            setLoading(true);
            setError('');
            const { items } = await ScheduleApi.getAll();
            console.log(items);
            setSchedules(items);
        } catch (error) {
            setError(error as string);
        } finally {
            setLoading(false);
        }
    };

    const getSchedulesByParams = async (params: IScheduleGetByParams) => {
        try {
            setLoading(true);
            setError('');
            const { items } = await ScheduleApi.getByParams(params);
            setSchedules(items);
        } catch (error) {
            setError(handleGetErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    return {
        getSchedules,
        getSchedulesByParams,
        loading,
        error,
        schedules,
    };
};

export default useSchedule;
