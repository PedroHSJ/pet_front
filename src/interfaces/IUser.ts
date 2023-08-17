import { IBaseInterface } from './IBaseInterface';

export interface IUser extends IBaseInterface {
    name: string;

    email: string;

    password: string;
}
