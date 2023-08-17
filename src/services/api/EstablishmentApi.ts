import { api } from '.';
import { IEstablishment } from '../../interfaces/IEstablishment';
import { ApiResponseInterface } from '../../interfaces/IResponse';

const getAllEstablishments = async (): Promise<
    ApiResponseInterface<IEstablishment>
> => {
    const { data } = await api.get<ApiResponseInterface<IEstablishment>>(
        'establishment',
    );
    console.log(api);
    return data;
};

export { getAllEstablishments };
