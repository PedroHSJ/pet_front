import { IAnamnesis } from './IAnamnesis';
import { IFood } from './IFood';
import { IMeasurement } from './IMeasurement';
import { ISchedule } from './ISchedule';

export interface ITreatmentRecord {
    schedule: ISchedule;
    mainComplaint: string;
    treatmentPerformed: string;
    anamnesis: IAnamnesis;
    measurement: IMeasurement;
    food: IFood;
}

export interface ITreatmentRecordDTO {
    scheduleId: string;
    mainComplaint: string;
    treatmentPerformed: string;
    anamnesis: IAnamnesis;
    measurement: IMeasurement;
    food: IFood;
}

export interface ITreatmentsGetByParams {
    professionalId?: string;
    scheduleId?: string;
}
