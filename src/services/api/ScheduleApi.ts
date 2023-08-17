import { api } from ".";
import { ApiResponseInterface } from "../../interfaces/IResponse";
import { ISchedule } from "../../interfaces/ISchedule";

const getAll = async (): Promise<ApiResponseInterface<ISchedule>> => {
  const { data } = await api.get<ApiResponseInterface<ISchedule>>("schedule");
  return data;
};

const getById = async (
  id: string
): Promise<ApiResponseInterface<ISchedule>> => {
  const { data } = await api.get<ApiResponseInterface<ISchedule>>(
    `schedule/${id}`
  );
  return data;
};

export default { getAll, getById };
