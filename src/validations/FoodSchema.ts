import * as Yup from 'yup';
import { REQUIRED } from '../constants/errors';
import { NaturalFood } from '../enums/foods/naturalFood.enum';
import { Portion } from '../enums/foods/portion.enum';

export const FoodSchema = Yup.object().shape({
    naturalFood: Yup.mixed()
        .oneOf(Object.values(NaturalFood))
        .required(REQUIRED),
    portion: Yup.mixed().oneOf(Object.values(Portion)).required(REQUIRED),
});
