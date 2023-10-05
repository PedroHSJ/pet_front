import { useLocation } from 'react-router';
import { Template } from '../../components/layouts/Template';
import { ISchedule } from '../../interfaces/ISchedule';
import { HeaderMedicalCare } from '../../components/medicalCare/Header';
import { PacientInfo } from '../../components/medicalCare/PacientInfo';
import { TreatmentRecord } from '../../components/medicalCare/TreatmentRecord';

export const MedicalCare = () => {
    const location = useLocation();
    const schedule = location.state as ISchedule;

    return (
        <Template>
            <HeaderMedicalCare schedule={schedule} />
            <PacientInfo schedule={schedule} />

            <TreatmentRecord />
        </Template>
    );
};
