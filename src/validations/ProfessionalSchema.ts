import * as yup from 'yup';
import { REQUIRED } from '../constants/errors';

export const ProfessionalSchema = yup.object().shape({
    name: yup.string().required(REQUIRED),
    email: yup.string().email().required(REQUIRED),
    password: yup.string().required(REQUIRED),
    crmv: yup.string().required(REQUIRED),
    phone: yup.string().required(REQUIRED),
});
