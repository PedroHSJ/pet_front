import { IBaseInterface } from './IBaseInterface';

export interface IAddress extends IBaseInterface {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
}

export interface IAddressDTO {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
}
