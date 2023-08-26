import { useState } from 'react';
import { IBreed } from '../interfaces/IBreed';
import { getAllBreedsApi, getBreedByParamsApi } from '../services/api/BreedApi';
import { handleGetErrorMessage } from '../utils';

export const useBreed = () => {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [breeds, setBreeds] = useState<IBreed[]>([]);
    const [error, setError] = useState('');
    const [totalCount, setTotalCount] = useState(0);

    const getAllBreeds = async () => {
        try {
            setLoading(true);
            setError('');
            const { items, totalCount } = await getAllBreedsApi();
            setBreeds(items);
            setTotalCount(totalCount);
        } catch (error) {
            setError(handleGetErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const getBreedByParams = async ({
        params,
        page,
        pageSize,
    }: IGetByParams<Partial<IBreed>>) => {
        try {
            setLoading(true);
            setError('');
            const { items, totalCount } = await getBreedByParamsApi({
                params,
                page,
                pageSize,
            });

            setBreeds(items);
            setTotalCount(totalCount);
        } catch (error) {
            setError(handleGetErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    return {
        success,
        loading,
        breeds,
        error,
        totalCount,
        getAllBreeds,
        getBreedByParams,
    };
};
