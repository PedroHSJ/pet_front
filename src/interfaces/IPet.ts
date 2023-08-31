import { Gender } from '../enums/gender.enum';
import { Specie } from '../enums/specie.enum';
import { IBaseInterface } from './IBaseInterface';
import { IBreed } from './IBreed';

export interface IPet extends IBaseInterface {
    name: string;
    weight: number;
    breed: IBreed;
    specie: Specie;
    gender: Gender;
    dateOfBirth: Date;
}
