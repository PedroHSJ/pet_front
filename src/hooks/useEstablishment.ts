import { useState } from 'react';
import { IEstablishment, IEstablishmentDTO } from '../interfaces/IEstablishment';
import { getEstablishmentByParams as getEstablishmentByParamsApi, postEstablishment, getAllEstablishments as getAllEstablishmentsApi } from '../services/api/EstablishmentApi';
import { handleGetErrorMessage } from '../utils';
export const useEstablishment = () => {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [establishments, setEstablishments] = useState<IEstablishment[]>([]);
    const [error, setError] = useState('');
    const [totalCount, setTotalCount] = useState(0);

    const getAllEstablishments = async () => {
        try {
            setLoading(true);
            const { items, totalCount } = await getAllEstablishmentsApi();

            setEstablishments(items);
            setTotalCount(totalCount);
        } catch (error) {
            setError(error as string);
        } finally {
            setLoading(false);
        }
    };

    const getEstablishmentByParams = async ({
        params,
        page,
    }: IGetByParams<IEstablishment>) => {
        try {
            setLoading(true);
            const { items, totalCount } = await getEstablishmentByParamsApi({
                params,
                page,
            });

            setEstablishments(items);
            setTotalCount(totalCount);
        } catch (error) {
            setError(error as string);
        } finally {
            setLoading(false);
        }
    };

    const createEstablishment = async (estab: IEstablishmentDTO) => {
        try {
            setError('');
            setSuccess(false);
            setLoading(true);
            await postEstablishment(estab);
            setSuccess(true);
        } catch (error) {
            setSuccess(false);
            setError(handleGetErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        establishments,
        error,
        totalCount,
        success,
        getAllEstablishments,
        getEstablishmentByParams,
        createEstablishment,
    };
};
