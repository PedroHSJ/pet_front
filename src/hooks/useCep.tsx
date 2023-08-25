import { useState } from "react";
import { getCep as getCepApi } from '../services/api';
import { ICep } from "../interfaces/ICep";

const useCep = () => {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [cep, setCep] = useState<ICep | undefined>();

    const getCep = async (cep: string) => {
        cep = cep.replace(/\D/g, '');
        if(cep.length < 8) return;
        
        try {
            setLoading(true);
            const response = await getCepApi(cep);

            console.log("response", response)
            setCep(response);
            setSuccess(true);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }

    return {
        cep,
        error,
        loading,
        getCep,
    }
}



export {useCep}