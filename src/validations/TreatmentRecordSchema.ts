import * as yup from 'yup';
import { AnamnesisSchema } from './AnamnesisSchema';
import { REQUIRED } from '../constants/errors';
import { FoodSchema } from './FoodSchema';

export const TreatmentRecordSchema = yup.object().shape({
    mainComplaint: yup.string().required(REQUIRED),
    treatmentPerformed: yup.string().required(REQUIRED),
    anamnesis: AnamnesisSchema,
    food: FoodSchema,
});
