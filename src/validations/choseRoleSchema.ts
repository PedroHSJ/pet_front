import { REQUIRED } from '../constants/errors';
import { Role } from '../interfaces/IRole';
import * as yup from 'yup';

export const choseRoleSchema = yup.object().shape({
    role: yup.string().required(REQUIRED),
});
