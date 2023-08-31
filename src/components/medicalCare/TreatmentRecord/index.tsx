import { Textarea, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { TitleTreatmentRecord } from '../Title';
import { SubTitleTreatmentRecord } from '../Subtitle';
import { RadioHorizontalList } from '../../forms/RadioButtons';
import { DigestiveSystem } from '../../../enums/digestiveSystem.enum';
import { UrogenitalSystem } from '../../../enums/urogenitalSystem.enum';
import { CardioRespiratorySystem } from '../../../enums/cardiorespiratorySystem.enum';
import { LocomotorSystem } from '../../../enums/locomotorSystem.enum';
import { NeurologicalSystem } from '../../../enums/neurologicalSystem.enum';

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
                    <SubTitleTreatmentRecord>Anamense</SubTitleTreatmentRecord>
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
            </div>
        </div>
    );
};
