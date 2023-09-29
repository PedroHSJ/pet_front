import { IBaseInterface } from './IBaseInterface';

export interface IAddress extends IBaseInterface {
    postalCode: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement?: string;
}

export interface IAddressDTO {
    postalCode: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement?: string;
}
