import { api } from '.';
import { ApiResponseInterface } from '../../interfaces/IResponse';
import { IUser, IUserDTO } from '../../interfaces/IUser';

export const getUserById = async (
    id: string,
): Promise<ApiResponseInterface<IUser>> => {
    const { data } = await api.get<ApiResponseInterface<IUser>>(`/user/${id}`);
    return data;
};

export const postUser = async (user: IUserDTO): Promise<{ id: string }> => {
    const { data } = await api.post<{ id: string }>('/user', user);
    return { id: data.id };
};
