import { IBaseInterface } from './IBaseInterface';

export interface IProfessional extends IBaseInterface {
    name: string;
    email: string;
    password: string;
    crmv: string;
    phone?: string;
}
