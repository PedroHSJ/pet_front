import { api } from '.';
import {
    IEstablishment,
    IEstablishmentDTO,
} from '../../interfaces/IEstablishment';
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
}: IGetByParams<Partial<IEstablishment>>): Promise<
    ApiResponseInterface<IEstablishment>
> => {
    //convert string to boolean
    const { data } = await api.get<
        Promise<ApiResponseInterface<IEstablishment>>
    >(`establishment`, { params: { ...params, page } });
    return data;
};

const postEstablishment = async (
    estab: IEstablishmentDTO,
): Promise<{ id: string }> => {
    const { data } = await api.post<{ id: string }>('establishment', estab);
    console.log(data);
    return { id: data.id };
};

const putEstablishment = async (
    estab: IEstablishmentDTO,
    idParams: string,
): Promise<{ id: string }> => {
    await api.put(`establishment/${idParams}`, estab);
    return { id: idParams };
};

export {
    getAllEstablishments,
    getEstablishmentByParams,
    postEstablishment,
    putEstablishment,
};
