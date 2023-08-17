import * as yup from 'yup';
import { REQUIRED } from '../constants/errors';

export const ForgotPasswordSchema = yup.object().shape({
	code: yup.string().required(REQUIRED),
});
