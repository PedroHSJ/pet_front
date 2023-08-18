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

const postProfessional = async (
    professional: IProfessional,
): Promise<{ id: string }> => {
    const { data } = await api.post<{ id: string }>(
        '/professional',
        professional,
    );
    return { id: data.id };
};

export { getAllProfessionals };
