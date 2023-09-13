import * as yup from 'yup';
import { INVALID_CPF, REQUIRED } from '../constants/errors';
import { isValidCPF } from '../utils';

export const CheckUserSchema = yup.object().shape({
    email: yup.string().email().required(REQUIRED),
});
