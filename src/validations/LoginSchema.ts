import * as yup from 'yup';
import { INVALID_CPF, INVALID_EMAIL, REQUIRED } from '../constants/errors';
import { isValidCPF } from '../utils';
import { Role } from '../interfaces/IRole';

export const LoginSchemaWithPassword = yup.object().shape({
    // cpf: yup
    // 	.string()
    // 	.test('isValidCPF', INVALID_CPF, isValidCPF)
    // 	.required(REQUIRED),
    email: yup.string().email(INVALID_EMAIL).required(REQUIRED),
    password: yup.string().required(REQUIRED),
    scope: yup.string().required(REQUIRED),
});

export const LoginSchemaWithoutPassword = yup.object().shape({
    cpfOrCns: yup.string().required(REQUIRED),
});
