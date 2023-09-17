import * as yup from 'yup';
import { REQUIRED } from '../constants/errors';
import { Gender } from '../enums/gender.enum';

export const ProfessionalSchema = yup.object().shape({
    name: yup.string().required(REQUIRED),
    email: yup.string().email().required(REQUIRED),
    password: yup.string().required(REQUIRED),
    confirmPassword: yup.string().required(REQUIRED),
    crmv: yup.string().required(REQUIRED),
    phone: yup.string().required(REQUIRED),
    active: yup.boolean().required(REQUIRED),
    gender: yup
        .string()
        .oneOf(Object.keys(Gender).map((key) => Gender[key]))
        .required(REQUIRED),
});
