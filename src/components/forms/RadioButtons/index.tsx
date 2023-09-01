import {
    Radio,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from '@material-tailwind/react';
import { useEffect } from 'react';

interface IRadioButtonsArrayProps {
    title: string;
    options: string[];
    name: string;
}
interface IRadioButtonsProps {
    list: IRadioButtonsArrayProps[];
    handleClick?: (value: string) => void;
}

export function RadioHorizontalList({ list, handleClick }: IRadioButtonsProps) {
    useEffect(() => {
        console.log(list);
    }, [list]);

    return (
        <Card className="bg-white w-full justify-between flex-col items-center p-2">
            {list &&
                list.map((item) => {
                    return (
                        <div className="flex flex-col w-full">
                            <div className="flex-start">
                                <Typography
                                    key={item.title}
                                    variant="small"
                                    className="text-primary uppercase font-bold"
                                >
                                    {item.title}
                                </Typography>
                            </div>

                            <div className="flex flex-row flex-wrap">
                                {item.options.map((option) => {
                                    return (
                                        <Radio
                                            key={option}
                                            name={item.name}
                                            value={option}
                                            label={
                                                <Typography
                                                    variant="small"
                                                    className="text-black m-0"
                                                >
                                                    {option}
                                                </Typography>
                                            }
                                            onClick={() => {
                                                if (handleClick) {
                                                    handleClick(option);
                                                }
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
        </Card>
    );
}
