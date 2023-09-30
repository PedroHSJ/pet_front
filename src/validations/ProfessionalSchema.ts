import * as yup from 'yup';
import { REQUIRED, INVALID_EMAIL, INVALID_PASSWORD } from '../constants/errors';
import { Gender } from '../enums/gender.enum';
import { validatePassword } from '../utils/validatePassword';

export const NewProfessionalSchema = yup.object().shape({
    name: yup.string().required(REQUIRED),
    email: yup.string().email(INVALID_EMAIL).required(REQUIRED),
    password: yup
        .string()
        .test('password', INVALID_PASSWORD, validatePassword)
        .required(REQUIRED),

    confirmPassword: yup.string().required(REQUIRED),
    crmv: yup.string().required(REQUIRED),
    phone: yup.string().required(REQUIRED),
    active: yup.boolean().required(REQUIRED),
    gender: yup
        .string()
        .required(REQUIRED)
        .oneOf(
            Object.keys(Gender).map(
                (key) => Gender[key as keyof typeof Gender],
            ),
            REQUIRED,
        ),
});

export const EditProfessionalSchema = yup.object().shape({
    name: yup.string().required(REQUIRED),
    email: yup.string().email(INVALID_EMAIL).required(REQUIRED),
    changePassword: yup.boolean().required(REQUIRED),

    password: yup.string().when('changePassword', {
        is: (val: boolean) => {
            //se o campo não tiver valor ou for false, retorna true, senão retorna false
            return val == undefined || val == false ? false : true;
        },
        then: (schema) =>
            schema
                .required(REQUIRED)
                .test('password', INVALID_PASSWORD, validatePassword),
        otherwise: (schema) => schema,
    }),

    confirmPassword: yup.string().when('changePassword', {
        is: (val: boolean) => {
            //se o campo não tiver valor ou for false, retorna true, senão retorna false
            return val == undefined || val == false ? false : true;
        },
        then: (schema) => schema.required(REQUIRED),
        otherwise: (schema) => schema,
    }),

    crmv: yup.string().required(REQUIRED),
    phone: yup.string().required(REQUIRED),
    active: yup.boolean().required(REQUIRED),
    gender: yup
        .string()
        .required(REQUIRED)
        .oneOf(
            Object.keys(Gender).map(
                (key) => Gender[key as keyof typeof Gender],
            ),
            REQUIRED,
        ),
});
