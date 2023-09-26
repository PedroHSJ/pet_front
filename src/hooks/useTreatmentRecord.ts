import { useState } from 'react';
import { ITreatmentRecord } from '../interfaces/ITreatmentRecord';
import {
    createTreatment,
    getTreatmentRecord,
} from '../services/api/TreatmentRecordApi';
import { handleGetErrorMessage } from '../utils';

export const useTreatmentRecord = () => {
    const [treatmentRecordList, setTreatmentRecordList] =
        useState<ITreatmentRecord[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const postTreatmentRecord = async (treatment: ITreatmentRecord) => {
        try {
            setLoading(true);
            setError('');
            const { id } = await createTreatment(treatment);
            setSuccess(true);
        } catch (error) {
            setError(handleGetErrorMessage(error));
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    const getTreatments = async () => {
        try {
            setLoading(true);
            setError('');
            const { items } = await getTreatmentRecord();
            setTreatmentRecordList(items);
        } catch (error) {
            setError(handleGetErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    return {
        treatmentRecordList,
        loading,
        error,
        success,
        postTreatmentRecord,
        getTreatments,
    };
};
