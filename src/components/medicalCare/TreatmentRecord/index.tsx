import { Textarea, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { TitleTreatmentRecord } from '../Title';
import { SubTitleTreatmentRecord } from '../Subtitle';
import { RadioHorizontalList } from '../../forms/RadioButtons';
import { DigestiveSystem } from '../../../enums/digestiveSystem.enum';

export const TreatmentRecord = () => {
    const [options, setOptions] = useState(['Sim', 'Não']);
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
                            },
                            {
                                title: 'Sistema Digestório',
                                options: [
                                    DigestiveSystem.VOMITING,
                                    DigestiveSystem.DIARRHEA,
                                    DigestiveSystem.CONSTIPATION,
                                    DigestiveSystem.REGURGITATION,
                                    DigestiveSystem.OTHER,
                                ],
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
