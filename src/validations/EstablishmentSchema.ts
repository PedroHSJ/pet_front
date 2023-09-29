import * as yup from 'yup';
import { REQUIRED } from '../constants/errors';
import { AddressSchema } from './AddressSchema';

export const NewEstablishmentSchema = yup.object().shape({
    name: yup.string().required(REQUIRED),
    cnpj: yup.string().required(REQUIRED),
    address: AddressSchema,
    active: yup.boolean().required(REQUIRED),
});

export const EditEstablishmentSchema = yup.object().shape({
    name: yup.string().required(REQUIRED),
    cnpj: yup.string().required(REQUIRED),
    address: AddressSchema,
    active: yup.boolean().required(REQUIRED),
});
