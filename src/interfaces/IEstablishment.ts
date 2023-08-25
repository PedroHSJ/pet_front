import { IAddress, IAddressDTO } from './IAddress';
import { IBaseInterface } from './IBaseInterface';

export interface IEstablishment extends IBaseInterface {
    name: string;
    cnpj: string;
    address: IAddress;
    active: boolean;
}

export interface IEstablishmentDTO {
    name: string;
    cnpj: string;
    address: IAddressDTO;
    active: boolean;
}
