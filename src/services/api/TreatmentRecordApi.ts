import { api } from '.';
import { ApiResponseInterface } from '../../interfaces/IResponse';
import { ITreatmentRecord } from '../../interfaces/ITreatmentRecord';

const createTreatment = async (
    treatment: ITreatmentRecord,
): Promise<{ id: string }> => {
    const { data } = await api.post<{ id: string }>(
        '/treatment-record',
        treatment,
    );
    return { id: data.id };
};

const getTreatmentRecord = async (): Promise<
    ApiResponseInterface<ITreatmentRecord>
> => {
    const { data } = await api.get<ApiResponseInterface<ITreatmentRecord>>(
        '/treatment-record',
    );
    return data;
};

export { createTreatment, getTreatmentRecord };
