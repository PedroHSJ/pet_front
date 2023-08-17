import { api } from '.';
import { IClient } from '../../interfaces/IClient';
import { ApiResponseInterface } from '../../interfaces/IResponse';

export const getAllClients = async (): Promise<
    ApiResponseInterface<IClient>
> => {
    const { data } = await api.get<ApiResponseInterface<IClient>>('/client');
    return data;
};
