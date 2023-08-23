import { api } from '.';
import { IEstablishment } from '../../interfaces/IEstablishment';
import { ApiResponseInterface } from '../../interfaces/IResponse';

const getAllEstablishments = async (): Promise<
    ApiResponseInterface<IEstablishment>
> => {
    const { data } = await api.get<ApiResponseInterface<IEstablishment>>(
        'establishment',
    );
    return data;
};

const getEstablishmentByParams = async ({
    params,
    page,
}: IGetByParams<IEstablishment>): Promise<
    ApiResponseInterface<IEstablishment>
> => {
    //convert string to boolean
    if (params?.active) params.active = params.active === '1';
    const { data } = await api.get<
        Promise<ApiResponseInterface<IEstablishment>>
    >(`establishment`, { params: { ...params, page } });
    return data;
};

export { getAllEstablishments, getEstablishmentByParams };
