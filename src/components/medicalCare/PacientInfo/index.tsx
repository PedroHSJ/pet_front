import { Typography } from '@material-tailwind/react';
import { ISchedule } from '../../../interfaces/ISchedule';
import { calculateAge } from '../../../utils/calculateAge';
import { InputComponent } from '../../forms/NewInput';
import { TitleTreatmentRecord } from '../Title';

interface PacientInfoProps {
    schedule: ISchedule;
}

export const PacientInfo = ({ schedule }: PacientInfoProps) => {
    return (
        <div className="bg-white flex flex-col p-4">
            <TitleTreatmentRecord>Informações do paciente</TitleTreatmentRecord>
            <div
                className="
            flex 
            flex-row 
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
                <div className="flex flex-col">
                    <label className="text-primary font-bold text-sm">
                        Nome do paciente
                    </label>
                    <InputComponent
                        name="name"
                        disabled
                        value={schedule.pet.name}
                        label="Paciente"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-primary font-bold text-sm">
                        Raça
                    </label>
                    <InputComponent
                        name="breed"
                        disabled
                        value={schedule.pet.breed.name}
                        label="Raça"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-primary font-bold text-sm">
                        Espécie
                    </label>
                    <InputComponent
                        name="species"
                        disabled
                        value={
                            schedule.pet.specie === 'DOG' ? 'Cachorro' : 'Gato'
                        }
                        label="Espécie"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-primary font-bold text-sm">
                        Sexo
                    </label>
                    <InputComponent
                        name="sex"
                        disabled
                        value={
                            schedule.pet.gender === 'MALE' ? 'Macho' : 'Fêmea'
                        }
                        label="Sexo"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-primary font-bold text-sm">
                        Peso
                    </label>
                    <InputComponent
                        name="weight"
                        disabled
                        value={`${schedule.pet.weight} Kg`}
                        label="Peso"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-primary font-bold text-sm">
                        Idade
                    </label>
                    <InputComponent
                        name="age"
                        disabled
                        value={`${calculateAge(schedule.pet.dateOfBirth)} anos`}
                        label="Idade"
                    />
                </div>
            </div>

            <TitleTreatmentRecord>Informações do tutor</TitleTreatmentRecord>
            <div
                className="
            flex 
            flex-row 
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
                <div className="flex flex-col">
                    <label className="text-primary font-bold text-sm">
                        Nome do tutor
                    </label>
                    <InputComponent
                        name="name"
                        disabled
                        value={schedule.client.name}
                        label="Nome do tutor"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-primary font-bold text-sm">
                        Email
                    </label>
                    <InputComponent
                        name="phone"
                        disabled
                        value={schedule.client.email}
                        label="Telefone"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-primary font-bold text-sm">
                        Logradouro
                    </label>
                    <InputComponent
                        name="address"
                        disabled
                        value={
                            schedule.client.address?.street +
                            ' - ' +
                            schedule.client.address?.number
                        }
                        label="Endereço"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-primary font-bold text-sm">
                        Cidade
                    </label>
                    <InputComponent
                        name="city"
                        disabled
                        value={schedule.client.address?.city}
                        label="Cidade"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-primary font-bold text-sm">
                        Bairro
                    </label>
                    <InputComponent
                        name="neighborhood"
                        disabled
                        value={schedule.client.address?.neighborhood}
                        label="Bairro"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-primary font-bold text-sm">
                        Estado
                    </label>
                    <InputComponent
                        name="state"
                        disabled
                        value={schedule.client.address?.state}
                        label="Estado"
                    />
                </div>
            </div>
        </div>
    );
};
