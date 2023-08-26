import { api } from '.';
import { IBreed } from '../../interfaces/IBreed';
import { ApiResponseInterface } from '../../interfaces/IResponse';

const getAllBreedsApi = async (): Promise<ApiResponseInterface<IBreed>> => {
    const { data } = await api.get<ApiResponseInterface<IBreed>>('breed');
    return data;
};

const getBreedByParamsApi = async ({
    params,
    page,
    pageSize,
}: IGetByParams<Partial<IBreed>>): Promise<ApiResponseInterface<IBreed>> => {
    const { data } = await api.get<Promise<ApiResponseInterface<IBreed>>>(
        `breed`,
        { params: { ...params, page, pageSize } },
    );
    return data;
};

export { getAllBreedsApi, getBreedByParamsApi };
