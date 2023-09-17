import { Gender } from '../enums/gender.enum';
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
    gender: Gender;
}

export interface IProfessionalDTO {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    crmv: string;
    phone: string;
    active: boolean;
    gender: Gender;
}

export interface IProfessionalGetByParams {
    name?: string;
    email?: string;
    crmv?: string;
    phone?: string;
    active?: boolean;
    gender?: Gender;
}
