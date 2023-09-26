import { IAnamnesis } from './IAnamnesis';
import { IFood } from './IFood';
import { ISchedule } from './ISchedule';

export interface ITreatmentRecord {
    schedule: ISchedule;
    mainComplaint: string;
    treatmentPerformed: string;
    anamnesis: IAnamnesis;
    food: IFood;
}

export interface ITreatmentRecordDTO {
    scheduleId: string;
    mainComplaint: string;
    treatmentPerformed: string;
    anamnesis: IAnamnesis;
    food: IFood;
}
