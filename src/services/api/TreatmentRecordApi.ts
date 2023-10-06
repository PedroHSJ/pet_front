import { api } from '.';
import { ApiResponseInterface } from '../../interfaces/IResponse';
import {
    ITreatmentRecord,
    ITreatmentRecordDTO,
} from '../../interfaces/ITreatmentRecord';

const createTreatment = async (
    treatment: ITreatmentRecordDTO,
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

const getTreatmentsRecordByParams = async (
    params: any,
): Promise<ApiResponseInterface<ITreatmentRecord>> => {
    const { data } = await api.get<
        Promise<ApiResponseInterface<ITreatmentRecord>>
    >(`/treatment-record`, { params });
    return data;
};

export { createTreatment, getTreatmentRecord, getTreatmentsRecordByParams };
