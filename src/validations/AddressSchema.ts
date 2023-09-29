import * as yup from 'yup';
import { REQUIRED } from '../constants/errors';

export const AddressSchema = yup.object().shape({
    postalCode: yup.string().required(REQUIRED),
    state: yup.string().required(REQUIRED),
    city: yup.string().required(REQUIRED),
    neighborhood: yup.string().required(REQUIRED),
    street: yup.string().required(REQUIRED),
    number: yup.string().required(REQUIRED),
    complement: yup.string(),
});
