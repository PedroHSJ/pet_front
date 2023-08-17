import * as yup from 'yup';
import { REQUIRED } from '../constants/errors';

export const Register = yup.object().shape({
	nomeCompleto: yup.string().required(REQUIRED),
	cpfOrCns: yup.string().required(REQUIRED),
});

