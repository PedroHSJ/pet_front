import {
    Tabs,
    TabsHeader,
    Tab,
    TabsBody,
    TabPanel,
} from '@material-tailwind/react';
import { data } from 'autoprefixer';
import { IOptions } from '../../interfaces/IOptions';
import {
    Control,
    FieldValue,
    FieldValues,
    useController,
    useForm,
} from 'react-hook-form';
import { useEffectOnce } from 'react-use';
import { useEffect } from 'react';

interface ITabProps {
    options: IOptions[];
    defaultValueComponent?: string;
    control: Control<FieldValue<FieldValues>>;
    name: string;
}

export const TabComponent = ({
    options,
    control,
    defaultValueComponent,
    name,
}: ITabProps) => {
    const form = useForm();
    const { field } = useController({
        name,
        control: control || form.control,
        defaultValue: '1',
    });

    const handleChangeValue = (value: string) => {
        console.log(value);
        field.onChange(value);
    };

    return (
        <Tabs className="min-w-fit mb-3" value={field.value}>
            <TabsHeader>
                {options.map(({ label, value }) => (
                    <Tab
                        onClick={() => handleChangeValue(value)}
                        onChange={handleChangeValue}
                        key={value}
                        value={value}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
        </Tabs>
    );
};
