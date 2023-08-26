import {
    Radio,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from '@material-tailwind/react';

interface IRadioButtonsProps {
    options: string[];
    handleClick?: (value: string) => void;
}

export function RadioHorizontalList({
    options,
    handleClick,
}: IRadioButtonsProps) {
    return (
        <Card className="w-full max-w-[24rem]">
            <Typography
                color="blue-gray"
                className="text-left font-medium px-3 py-2"
            >
                Selecione uma opção
            </Typography>
            <List className="flex-row">
                {options.map((option) => {
                    return (
                        <ListItem className="p-0">
                            <label
                                htmlFor="horizontal-list-react"
                                className="flex w-full cursor-pointer items-center px-3 py-2"
                            >
                                <ListItemPrefix className="mr-3">
                                    <Radio
                                        name="horizontal-list"
                                        id="horizontal-list-react"
                                        ripple={false}
                                        className="hover:before:opacity-0"
                                        containerProps={{
                                            className: 'p-0',
                                        }}
                                        onClick={() => {
                                            handleClick && handleClick(option);
                                        }}
                                    />
                                </ListItemPrefix>
                                <Typography
                                    color="blue-gray"
                                    className="font-medium"
                                >
                                    {option}
                                </Typography>
                            </label>
                        </ListItem>
                    );
                })}
            </List>
        </Card>
    );
}
