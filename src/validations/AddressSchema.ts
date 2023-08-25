import * as yup from 'yup';
import { REQUIRED } from '../constants/errors';

export const AddressSchema = yup.object().shape({
    street: yup.string().required(REQUIRED),
    number: yup.string().required(REQUIRED),
    complement: yup.string(),
    neighborhood: yup.string().required(REQUIRED),
    city: yup.string().required(REQUIRED),
    state: yup.string().required(REQUIRED),
    postalCode: yup.string().required(REQUIRED),
});