import { IBaseInterface } from './IBaseInterface';
import { IRole } from './IRole';

export interface IProfessional extends IBaseInterface {
    name: string;
    email: string;
    password: string;
    crmv: string;
    phone?: string;
    role: IRole;
    active: boolean;
}

export interface IProfessionalDTO {
    name: string;
    email: string;
    password: string;
    crmv: string;
    phone: string;
    active: boolean;
}

export interface IProfessionalGetByParams {
    name?: string;
    email?: string;
    crmv?: string;
    phone?: string;
    active?: boolean;
}
