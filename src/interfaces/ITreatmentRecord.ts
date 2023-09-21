import { IAnamnesis } from './IAnamnesis';
import { IFood } from './IFood';

export interface ITreatmentRecord {
    scheduleId: string;
    mainComplaint: string;
    treatmentPerformed: string;
    anamnesis: IAnamnesis;
    food: IFood;
}
