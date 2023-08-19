import { api } from '.';
import {
    IProfessional,
    IProfessionalDTO,
} from '../../interfaces/IProfessional';
import { ApiResponseInterface } from '../../interfaces/IResponse';

const getAllProfessionals = async (): Promise<
    ApiResponseInterface<IProfessional>
> => {
    const { data } = await api.get<ApiResponseInterface<IProfessional>>(
        'professional',
    );
    return data;
};

const geProfessionalById = async (
    id: string,
): Promise<ApiResponseInterface<IProfessional>> => {
    const { data } = await api.get<
        Promise<ApiResponseInterface<IProfessional>>
    >(`professional/${id}`);
    return data;
};

const postProfessional = async (
    professional: IProfessionalDTO,
): Promise<{ id: string }> => {
    const { data } = await api.post<{ id: string }>(
        '/professional',
        professional,
    );
    return { id: data.id };
};

export { getAllProfessionals, postProfessional, geProfessionalById };
