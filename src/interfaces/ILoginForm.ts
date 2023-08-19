import { Role } from './IRole';
import { IScope } from './IScope';

export interface ILoginFormWithPassword {
    email: string;
    password: string;
    scope: string;
}

export interface ILoginFormWithoutPassword {
    cpfOrCns: string;
}
