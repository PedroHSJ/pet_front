import * as yup from 'yup';
import { INVALID_CPF, REQUIRED } from '../constants/errors';
import { isValidCPF } from '../utils';

export const CheckUserSchema = yup.object().shape({
	cpf: yup
		.string()
		.test('isValidCPF', INVALID_CPF, isValidCPF)
		.required(REQUIRED),
	method: yup.string<'Email' | 'SMS' | 'WhatsApp'>().required(REQUIRED),
});
