import * as Yup from 'yup';
import { REQUIRED } from '../constants/errors';
import { CardioRespiratorySystem } from '../enums/anamnese/cardiorespiratorySystem.enum';
import { DigestiveSystem } from '../enums/anamnese/digestiveSystem.enum';
import { Ears } from '../enums/anamnese/ears.enum';
import { Environment } from '../enums/anamnese/environment.enum';
import { Eyes } from '../enums/anamnese/eyes.enum';
import { LocomotorSystem } from '../enums/anamnese/locomotorSystem.enum';
import { NeurologicalSystem } from '../enums/anamnese/neurologicalSystem.enum';
import { Skin } from '../enums/anamnese/skin.enum';
import { UrogenitalSystem } from '../enums/anamnese/urogenitalSystem.enum';
import { MeasurementCondition } from '../enums/measurement/measurementCondition.enum';

export const AnamnesisSchema = Yup.object().shape({
    digestiveSystem: Yup.mixed()
        .oneOf(Object.values(DigestiveSystem))
        .required(REQUIRED),
    otherDigestiveSystem: Yup.string().max(255),

    urogenitalSystem: Yup.mixed()
        .oneOf(Object.values(UrogenitalSystem))
        .required(REQUIRED),
    otherUrogenitalSystem: Yup.string().max(255),

    cardiorespiratorySystem: Yup.mixed()
        .oneOf(Object.values(CardioRespiratorySystem))
        .required(REQUIRED),
    otherCardiorespiratorySystem: Yup.string().max(255),

    neurologicSystem: Yup.mixed()
        .oneOf(Object.values(NeurologicalSystem))
        .required(REQUIRED),
    otherNeurologicSystem: Yup.string().max(255),

    locomotorSystem: Yup.mixed()
        .oneOf(Object.values(LocomotorSystem))
        .required(REQUIRED),
    otherLocomotorSystem: Yup.string().max(255),

    skin: Yup.mixed().oneOf(Object.values(Skin)).required(REQUIRED),
    otherSkin: Yup.string().max(255),

    eyes: Yup.mixed().oneOf(Object.values(Eyes)).required(REQUIRED),
    otherEyes: Yup.string().max(255),

    ears: Yup.mixed().oneOf(Object.values(Ears)).required(REQUIRED),
    otherEars: Yup.string().max(255),

    environment: Yup.mixed()
        .oneOf(Object.values(Environment))
        .required(REQUIRED),

    otherEnvironment: Yup.string().max(255),
    hydration: Yup.mixed()
        .oneOf(Object.values(MeasurementCondition))
        .required(REQUIRED),
    mucous: Yup.mixed()
        .oneOf(Object.values(MeasurementCondition))
        .required(REQUIRED),
    oralCavity: Yup.mixed()
        .oneOf(Object.values(MeasurementCondition))
        .required(REQUIRED),
    nasalCavity: Yup.mixed()
        .oneOf(Object.values(MeasurementCondition))
        .required(REQUIRED),
    lymphNodes: Yup.mixed()
        .oneOf(Object.values(MeasurementCondition))
        .required(REQUIRED),
});
