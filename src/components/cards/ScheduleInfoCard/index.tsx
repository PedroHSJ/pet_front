import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Typography,
} from '@material-tailwind/react';
import { ISchedule } from '../../../interfaces/ISchedule';
import { useNavigate } from 'react-router';
import { AiFillCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import { formatDate } from '../../../utils/format';
import { useEffect } from 'react';

interface ScheduleInfoCardProps {
    schedule: ISchedule;
}

export const ScheduleInfoCard = ({ schedule }: ScheduleInfoCardProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log(schedule);
    }, [schedule]);
    return (
        <div className="flex flex-row justify-center items-center">
            {schedule && <Card className="mt-6 w-96 sm:w-1/2"></Card>}
        </div>
    );
};
