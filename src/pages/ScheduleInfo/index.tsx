import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography,
} from '@material-tailwind/react';
import { Template } from '../../components/layouts/Template';
import { ISchedule } from '../../interfaces/ISchedule';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiFillCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import { formatDate } from '../../utils/format';
import { ScheduleInfoCard } from '../../components/cards/ScheduleInfoCard';
import { useEffect } from 'react';

export const ScheduleInfo = () => {
    const location = useLocation();
    const schedule = location.state as any;
    const navigate = useNavigate();

    useEffect(() => {
        console.log(schedule);
    }, [schedule]);

    return (
        <>
            <Template>
                <Button
                    key={1}
                    type="button"
                    className="bg-primary hover:bg-primary_hover"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Voltar
                </Button>
                {schedule && (
                    <ScheduleInfoCard key={schedule.id} schedule={schedule} />
                )}
            </Template>
        </>
    );
};
