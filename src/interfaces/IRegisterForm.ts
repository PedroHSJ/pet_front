import { IRole, Role } from './IRole';

export interface IRegisterUserForm {
    name: string;
    email: string;
    password: string;
    role: Role;
}

export interface IRegisterProfessionalForm {
    name: string;
    email: string;
    password: string;
    crmv: string;
    phone: string;
    role: Role;
}

export interface IChoseRole {
    role: string;
}
