import { AxiosResponse } from 'axios';
import { ICep } from '../../interfaces/ICep';
import { api } from './index';

const getCep = async ( cep: string ): Promise<ICep> => {
    const response = await api.get<unknown, AxiosResponse>(
        `https://viacep.com.br/ws/${cep}/json`
    );
    if(response.data){
        const mappedData: ICep = {
            postalCode: response.data.cep,
            state: response.data.uf,
            city: response.data.localidade,
            neighborhood: response.data.bairro,
            street: response.data.logradouro,
            number: '',
            complement: '',
        }
        return mappedData;
    }
    return {} as ICep;
}

export { getCep };