import { Textarea, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { TitleTreatmentRecord } from '../Title';
import { SubTitleTreatmentRecord } from '../Subtitle';
import { RadioHorizontalList } from '../../forms/RadioButtons';
import { CardioRespiratorySystem } from '../../../enums/anamnese/cardiorespiratorySystem.enum';
import { DigestiveSystem } from '../../../enums/anamnese/digestiveSystem.enum';
import { LocomotorSystem } from '../../../enums/anamnese/locomotorSystem.enum';
import { NeurologicalSystem } from '../../../enums/anamnese/neurologicalSystem.enum';
import { UrogenitalSystem } from '../../../enums/anamnese/urogenitalSystem.enum';
import { Portion } from '../../../enums/foods/portion.enum';
import { NaturalFood } from '../../../enums/foods/naturalFood.enum';

export const TreatmentRecord = () => {
    const [options, setOptions] = useState(['SIM', 'NÃO']);
    const [mainComplaint, setMainComplaint] = useState('');

    return (
        <div className="bg-white flex flex-col p-4">
            <TitleTreatmentRecord>Ficha de atendimento</TitleTreatmentRecord>
            <div
                className="
            flex 
            flex-col 
            items-center 
            gap-4 
            flex-wrap 
            my-2 
            p-4
            rounded-lg
            bg-white
            shadow-lg
            "
            >
                <Textarea
                    size="lg"
                    label="Queixa principal"
                    success
                    onChange={(e) => {
                        setMainComplaint(e.target.value);
                    }}
                />
                <div className="w-full">
                    <SubTitleTreatmentRecord>Anamnese</SubTitleTreatmentRecord>
                    <RadioHorizontalList
                        key={1}
                        list={[
                            {
                                title: 'Doenças pregressas',
                                options,
                                name: 'previousDiseases',
                            },
                            {
                                title: 'Sistema Digestório',
                                options: [
                                    DigestiveSystem.NORMAL,
                                    DigestiveSystem.VOMITING,
                                    DigestiveSystem.DIARRHEA,
                                    DigestiveSystem.CONSTIPATION,
                                    DigestiveSystem.REGURGITATION,
                                    DigestiveSystem.OTHER,
                                ],
                                name: 'digestiveSystem',
                            },
                            {
                                title: 'Sistema Urinário',
                                options: [
                                    UrogenitalSystem.NORMAL,
                                    UrogenitalSystem.BLOOD_IN_URINE,
                                    UrogenitalSystem.DIFFICULTY_URINATING,
                                    UrogenitalSystem.INCONTINENCE,
                                    UrogenitalSystem.OTHER,
                                ],
                                name: 'urogenitalSystem',
                            },
                            {
                                title: 'Sistema Cardiorrespiratório',
                                options: [
                                    CardioRespiratorySystem.NORMAL,
                                    CardioRespiratorySystem.BREATHING_DIFFICULTY,
                                    CardioRespiratorySystem.COUGH,
                                    CardioRespiratorySystem.NASAL_CONGESTION,
                                    CardioRespiratorySystem.OTHER,
                                ],
                                name: 'cardioRespiratorySystem',
                            },
                            {
                                title: 'Sistema Locomotor',
                                options: [
                                    LocomotorSystem.NORMAL,
                                    LocomotorSystem.DIFFICULTY,
                                    LocomotorSystem.FRACTURES,
                                    LocomotorSystem.SWELLING,
                                    LocomotorSystem.STIFFNESS,
                                    LocomotorSystem.PAIN,
                                    LocomotorSystem.POSTURAL_CHANGES,
                                    LocomotorSystem.OTHER,
                                ],
                                name: 'locomotorSystem',
                            },
                            {
                                title: 'Sistema Nervoso',
                                options: [
                                    NeurologicalSystem.NORMAL,
                                    NeurologicalSystem.ATAXIA,
                                    NeurologicalSystem.FAINTING,
                                    NeurologicalSystem.OTHER,
                                ],
                                name: 'neurologicalSystem',
                            },
                        ]}
                        handleClick={(value) => {
                            console.log(value);
                        }}
                    />
                </div>

                <div className="w-full">
                    <SubTitleTreatmentRecord>
                        Alimentação
                    </SubTitleTreatmentRecord>
                    <RadioHorizontalList
                        key={2}
                        list={[
                            {
                                name: 'portion',
                                title: 'Ração',
                                options: [
                                    Portion.DRY,
                                    Portion.LIQUID,
                                    Portion.SEMILIQUID,
                                    Portion.SOFT,
                                    Portion.OTHER,
                                ],
                            },
                            {
                                name: 'naturalFood',
                                title: 'Alimento natural',
                                options: [
                                    NaturalFood.RAW_WHITH_BONES,
                                    NaturalFood.RAW_WHITHOUT_BONES,
                                    NaturalFood.COOKED,
                                    NaturalFood.NO_NATURAL_FOOD,
                                ],
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};
