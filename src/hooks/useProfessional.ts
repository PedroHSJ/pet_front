import { useState } from 'react';
import {
    getAllProfessionals,
    getProfessinalByParams,
    postProfessional,
    verifyEmailProfessional,
} from '../services/api/ProfissionalApi';
import { IProfessional, IProfessionalDTO, IProfessionalGetByParams } from '../interfaces/IProfessional';
import { handleGetErrorMessage } from '../utils';

export const useProfessional = () => {
    const [loading, setLoading] = useState(false);
    const [professionals, setProfessionals] = useState<IProfessional[]>([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [totalCount, setTotalCount] = useState(0);

    const getAll = async () => {
        try {
            setError('');
            setLoading(true);
            const { items, totalCount } = await getAllProfessionals();
            setProfessionals(items);
            setTotalCount(totalCount);
        } catch (error) {
            setError(handleGetErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const getByParams = async ({
        params,
        page,
        pageSize,
    }: IGetByParams<IProfessionalGetByParams>) => {
        try {
            setLoading(true);
            const { items, totalCount } = await getProfessinalByParams({
                ...params,
                page,
                pageSize,
            });
            setProfessionals(items);
            setTotalCount(totalCount);
        } catch (error) {
            setError(handleGetErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const createProfessional = async (professional: IProfessionalDTO) => {
        try {
            setError('');
            setSuccess(false);
            setLoading(true);
            await postProfessional(professional);
            setSuccess(true);
        } catch (error) {
            setSuccess(false);
            setError(handleGetErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const verifyEmailProfessionalExist = async (email: string) => {
        try {
            setError('');
            setLoading(true);
            const { items } = await verifyEmailProfessional(email);
            return !!items;
        } catch (error) {
            setError(handleGetErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        professionals,
        totalCount,
        error,
        success,
        getAll,
        getByParams,
        createProfessional,
        verifyEmailProfessionalExist,
    };
};
