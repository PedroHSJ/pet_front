import {
    Radio,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from '@material-tailwind/react';

interface IRadioButtonsArrayProps {
    title: string;
    options: string[];
}
interface IRadioButtonsProps {
    list: IRadioButtonsArrayProps[];
    handleClick?: (value: string) => void;
}

export function RadioHorizontalList({ list, handleClick }: IRadioButtonsProps) {
    return (
        <Card className="w-full justify-between flex-col items-center p-2">
            {list.map((item) => {
                return (
                    <div className="flex flex-row items-center justify-between w-full">
                        <Typography variant="small">{item.title}</Typography>
                        {item.options.map((option) => {
                            return (
                                <List className="flex flex-row">
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
                                                    onChange={() => {
                                                        handleClick &&
                                                            handleClick(option);
                                                    }}
                                                    // onClick={() => {
                                                    //     handleClick && handleClick(option);
                                                    // }}
                                                />
                                            </ListItemPrefix>
                                            <Typography variant="small">
                                                {option}
                                            </Typography>
                                        </label>
                                    </ListItem>
                                </List>
                            );
                        })}
                    </div>
                );
            })}
        </Card>
    );
}
