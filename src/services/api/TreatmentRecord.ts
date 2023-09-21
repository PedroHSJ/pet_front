import { api } from '.';
import { ITreatmentRecord } from '../../interfaces/ITreatmentRecord';

const postTreatmentRecord = async (
    data: ITreatmentRecord,
): Promise<{ id: string }> => {
    const response = await api.post('/treatment-record', data);
    return response.data;
};

export default {
    postTreatmentRecord,
};
