import { Card, Typography, Button } from '@material-tailwind/react';
import { ISchedule } from '../../interfaces/ISchedule';
import { formatDate } from '../../utils/format';
import { Pagination } from '../pagination';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ScheduleTableProps {
    schedules: ISchedule[];
    tableHead: string[];
}

export const ScheduleTable = ({ schedules, tableHead }: ScheduleTableProps) => {
    const navigate = useNavigate();
    return (
        <Card className="h-full w-full my-4 ">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {tableHead.map((head, index) => {
                            return (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((schedule, index) => {
                        const isLast = index === schedules.length - 1;
                        const classes = isLast
                            ? 'p-4'
                            : 'p-4 border-b border-blue-gray-50';

                        return (
                            <tr key={schedule.id}>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {schedule.client.name}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {formatDate(
                                            schedule.day.substring(0, 10),
                                        )}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {schedule.day.substring(11, 16)}h
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {schedule.pet.name}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {schedule.pet.breed.name}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {schedule.pet.specie === 'DOG'
                                            ? 'Cachorro'
                                            : 'Gato'}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {schedule.pet.gender === 'MASCULINO'
                                            ? 'Macho'
                                            : 'Fêmea'}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {schedule.pet.weight} Kg
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Button
                                        onClick={() => {
                                            navigate('/atendimento', {
                                                state: schedule,
                                            });
                                        }}
                                        className="bg-primary"
                                        size="sm"
                                    >
                                        Atender
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
};
