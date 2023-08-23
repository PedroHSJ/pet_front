import { IAddress } from './IAddress';
import { IBaseInterface } from './IBaseInterface';

export interface IEstablishment extends IBaseInterface {
    name: string;
    cnpj: string;
    address: IAddress;
    active: any;
}
