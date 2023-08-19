import { IBaseInterface } from './IBaseInterface';
import { IRole } from './IRole';

export interface IProfessional extends IBaseInterface {
    name: string;
    email: string;
    password: string;
    crmv: string;
    phone?: string;
    role: IRole;
}

export interface IProfessionalDTO {
    name: string;
    email: string;
    password: string;
    crmv: string;
    phone: string;
}
