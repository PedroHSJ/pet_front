import { IBaseInterface } from './IBaseInterface';
import { IRole } from './IRole';

export interface IUser extends IBaseInterface {
    name: string;

    email: string;

    password: string;

    role: IRole;
}

export interface IUserDTO {
    name: string;
    email: string;
    password: string;
    role: string;
}
