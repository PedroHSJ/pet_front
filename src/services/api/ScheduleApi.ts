import { api } from '.';
import { ApiResponseInterface } from '../../interfaces/IResponse';
import { ISchedule, IScheduleGetByParams } from '../../interfaces/ISchedule';

const getAll = async (): Promise<ApiResponseInterface<ISchedule>> => {
    const { data } = await api.get<ApiResponseInterface<ISchedule>>('schedule');
    return data;
};

const getById = async (
    id: string,
): Promise<ApiResponseInterface<ISchedule>> => {
    const { data } = await api.get<ApiResponseInterface<ISchedule>>(
        `schedule/${id}`,
    );
    return data;
};

const getByParams = async (
    params: IScheduleGetByParams,
): Promise<ApiResponseInterface<ISchedule>> => {
    const { data } = await api.get<ApiResponseInterface<ISchedule>>(
        `schedule`,
        { params },
    );
    return data;
};

export default { getAll, getById, getByParams };
