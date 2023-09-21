import { CardioRespiratorySystem } from '../enums/anamnese/cardiorespiratorySystem.enum';
import { DigestiveSystem } from '../enums/anamnese/digestiveSystem.enum';
import { Ears } from '../enums/anamnese/ears.enum';
import { Environment } from '../enums/anamnese/environment.enum';
import { Eyes } from '../enums/anamnese/eyes.enum';
import { LocomotorSystem } from '../enums/anamnese/locomotorSystem.enum';
import { NeurologicalSystem } from '../enums/anamnese/neurologicalSystem.enum';
import { Skin } from '../enums/anamnese/skin.enum';
import { UrogenitalSystem } from '../enums/anamnese/urogenitalSystem.enum';

export interface IAnamnesis {
    digestiveSystem: DigestiveSystem;
    otherDigestiveSystem?: string;

    urogenitalSystem: UrogenitalSystem;
    otherUrogenitalSystem?: string;

    cardiorespiratorySystem: CardioRespiratorySystem;
    otherCardiorespiratorySystem?: string;

    neurologicSystem: NeurologicalSystem;
    otherNeurologicSystem?: string;

    locomotorSystem: LocomotorSystem;
    otherLocomotorSystem?: string;

    skin: Skin;
    otherSkin?: string;

    eyes: Eyes;
    otherEyes?: string;

    ears: Ears;
    otherEars?: string;

    environment: Environment;
    otherEnvironment?: string;
}
