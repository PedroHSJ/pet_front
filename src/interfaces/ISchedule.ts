import { IBaseInterface } from './IBaseInterface';
import { IClient } from './IClient';
import { IEstablishment } from './IEstablishment';
import { IProcedure } from './IProcedure';
import { IProfessional } from './IProfessional';

export interface ISchedule extends IBaseInterface {
    day: string;
    establishment: IEstablishment;
    professional: IProfessional;
    client: IClient;
    cancellationStatus?: string;
}
