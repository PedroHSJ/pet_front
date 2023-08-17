import { api } from '.';
import { IProfessional } from '../../interfaces/IProfessional';
import { ApiResponseInterface } from '../../interfaces/IResponse';

const getAllProfessionals = async (): Promise<
    ApiResponseInterface<IProfessional>
> => {
    const { data } = await api.get<ApiResponseInterface<IProfessional>>(
        'professional',
    );
    return data;
};

export { getAllProfessionals };
