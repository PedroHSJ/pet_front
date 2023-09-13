import { IBaseInterface } from './IBaseInterface';
import { IClient } from './IClient';
import { IEstablishment } from './IEstablishment';
import { IPet } from './IPet';
import { IProcedure } from './IProcedure';
import { IProfessional } from './IProfessional';

export interface ISchedule extends IBaseInterface {
    day: string;
    establishment: IEstablishment;
    professional: IProfessional;
    client: IClient;
    pet: IPet;
    cancellationStatus?: string;
}

export interface IScheduleGetByParams {
    day?: string;
    professionalId?: string;
}
