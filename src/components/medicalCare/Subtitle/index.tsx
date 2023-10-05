import { Typography } from '@material-tailwind/react';
import { ReactNode } from 'react';

interface SubTitleTreatmentRecordProps {
    children: string | ReactNode;
}

export const SubTitleTreatmentRecord = ({
    children,
}: SubTitleTreatmentRecordProps) => {
    return (
        <div className="border-b border-gray w-full p-1.5 my-2">
            <Typography variant="h6" className="text-primary">
                {children}
            </Typography>
        </div>
    );
};
