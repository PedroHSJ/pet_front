import { useLocation } from 'react-router';
import { ISchedule } from '../../../interfaces/ISchedule';
import { Template } from '../../../components/layouts/Template';
import { HeaderMedicalCare } from '../../../components/medicalCare/Header';
import { PacientInfo } from '../../../components/medicalCare/PacientInfo';
import { TreatmentView } from './TreatmentView';

export const HistoricPreview = () => {
    const location = useLocation();
    const schedule = location.state as ISchedule;

    return (
        <Template>
            <HeaderMedicalCare schedule={schedule} />
            <PacientInfo schedule={schedule} />

            <TreatmentView />
        </Template>
    );
};
