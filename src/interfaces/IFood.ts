import { NaturalFood } from '../enums/foods/naturalFood.enum';
import { Portion } from '../enums/foods/portion.enum';

export interface IFood {
    portion: Portion;
    naturalFood: NaturalFood;
}
