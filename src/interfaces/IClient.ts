import { IAddress } from './IAddress';
import { IBaseInterface } from './IBaseInterface';
import { IPet } from './IPet';
import { IRole } from './IRole';

export interface IClient extends IBaseInterface {
    name: string;
    email: string;
    password: string;
    role: IRole;
    address?: IAddress;
    pets?: IPet[];
}
