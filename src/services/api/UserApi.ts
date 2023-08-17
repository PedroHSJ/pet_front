import { api } from '.';
import { ApiResponseInterface } from '../../interfaces/IResponse';
import { IUser } from '../../interfaces/IUser';

export const getUserById = async (
    id: string,
): Promise<ApiResponseInterface<IUser>> => {
    const { data } = await api.get<ApiResponseInterface<IUser>>(`/user/${id}`);
    return data;
};
