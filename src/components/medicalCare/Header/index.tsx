import { Typography } from '@material-tailwind/react';
import { ISchedule } from '../../../interfaces/ISchedule';
import { formatDate, formatPhoneNumber } from '../../../utils/format';
import { AiFillMail, AiOutlineMail } from 'react-icons/ai';
import Logo from '../../../assets/images/LogoPrimary.png';
import { BsPhone, BsPhoneFill, BsWhatsapp } from 'react-icons/bs';
interface IHeaderProps {
    schedule: ISchedule;
}

export const HeaderMedicalCare = ({ schedule }: IHeaderProps) => {
    const generateNumber = (): number => {
        return Math.floor(Math.random() * 1000000);
    };
    return (
        <header className="bg-white shadow pt-8">
            <div className="flex flex-row p-4 border-b-primary_light border-b-2">
                {/* {IMAGE} */}
                <div className="flex flex-col justify-center items-center">
                    <img src={Logo} alt="Logo" className="w-36" />
                </div>
                <div className="flex-1 px-8 text-center">
                    <Typography variant="h5">
                        {schedule.professional.name}
                    </Typography>
                    <div className="flex flex-row justify-center items-center gap-8">
                        <div className="flex flex-row items-center gap-2">
                            <BsWhatsapp color="green" />
                            <Typography variant="h6">
                                {formatPhoneNumber(schedule.professional.phone)}
                            </Typography>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Typography variant="smal">CRMV:</Typography>
                            <Typography variant="h6">
                                {schedule.professional.crmv}
                            </Typography>
                        </div>
                        <div className="flex flex-row items-center">
                            <AiFillMail className="mr-2" color="green" />
                            <Typography variant="h6">
                                {schedule.professional.email}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="">
                    {/* {NUMERO DO PRONTUARIO E DATA DO ATENDIMENTO} */}
                    <div className="flex flex-col h-full gap-4">
                        <div className="flex flex-row h-1/2 bg-primary rounded-lg p-2">
                            <Typography variant="h6">
                                <Typography
                                    variant="small"
                                    className="mr-2 text-white"
                                >
                                    Número do prontuário:
                                </Typography>
                                {generateNumber()}
                            </Typography>
                        </div>
                        <div className="flex flex-row h-1/2 bg-primary rounded-lg p-2">
                            <Typography variant="h6">
                                <Typography
                                    variant="small"
                                    className="mr-2 text-white"
                                >
                                    Data do atendimento:
                                </Typography>
                                {formatDate(schedule.day.substring(0, 10))}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
