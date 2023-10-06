import * as Yup from 'yup';
import { REQUIRED } from '../constants/errors';

export const MeasurementSchema = Yup.object().shape({
    temperature: Yup.string().required(REQUIRED),
    bloodPressure: Yup.string().required(REQUIRED),
    heartRate: Yup.string().required(REQUIRED),
    respiratoryRate: Yup.string().required(REQUIRED),
    glycemia: Yup.string().required(REQUIRED),
});
