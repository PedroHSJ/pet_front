import * as yup from 'yup';
import { REQUIRED } from '../constants/errors';
import { Role } from '../interfaces/IRole';

export const Register = yup.object().shape({
    name: yup.string().required(REQUIRED),
    email: yup.string().email('Email inválido').required(REQUIRED),
    password: yup.string().required(REQUIRED),
    role: yup.string().oneOf(Object.values(Role)).required(REQUIRED),
});

export const RegisterProfessional = yup.object().shape({
    name: yup.string().required(REQUIRED),
    email: yup.string().email('Email inválido').required(REQUIRED),
    password: yup.string().required(REQUIRED),
    crmv: yup.string().required(REQUIRED),
    phone: yup.string().max(11).required(REQUIRED),
    role: yup.string().oneOf(Object.values(Role)).required(REQUIRED),
});
