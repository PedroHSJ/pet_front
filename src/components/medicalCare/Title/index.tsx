import { Typography } from '@material-tailwind/react';
import { ReactNode } from 'react';

interface TitleTreatmentRecordProps {
    children: string | ReactNode;
}

export const TitleTreatmentRecord = ({
    children,
}: TitleTreatmentRecordProps) => {
    return (
        <div className="bg-primary p-1.5 rounded-lg my-2">
            <Typography variant="h5" color="white">
                {children}
            </Typography>
        </div>
    );
};
