import { Switch, Typography } from '@material-tailwind/react';
import { useState } from 'react';

interface SwitchGenericComponentProps {
    title: string;
    value: boolean;
}

export const SwitchGenericComponent = ({
    title,
    value,
}: SwitchGenericComponentProps) => {
    const [field, setField] = useState(value);

    const handleSwitch = (event: any) => {
        setField(event.target.checked);
    };

    return (
        <div className="mb-3">
            <Typography
                color="gray"
                style={{ fontSize: '14px', fontWeight: 'bold' }}
            >
                {title}
            </Typography>
            <Switch
                color="green"
                onChange={(event: any) => handleSwitch(event)}
                checked={field}
            />
        </div>
    );
};
