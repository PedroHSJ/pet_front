import { Gender } from '../enums/Gender';
import { Specie } from '../enums/Specie';
import { IBaseInterface } from './IBaseInterface';
import { IBreed } from './IBreed';

export interface IPet extends IBaseInterface {
    name: string;
    weight: number;
    breed: IBreed;
    specie: Specie;
    gender: Gender;
}
