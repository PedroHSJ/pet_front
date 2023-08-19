import React from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

interface IPaginationProps {
    page: number;
    total: number;
    onChange: (page: number) => void;
}

export function Pagination({ page, onChange }: IPaginationProps) {
    const [active, setActive] = React.useState(page);
    const getItemProps = (index) =>
        ({
            variant: active === index ? 'filled' : 'text',
            color: 'gray',
            onClick: () => setActive(index),
        } as any);

    const next = () => {
        if (active === 5) return;

        setActive(active + 1);

        onChange(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);

        onChange(active - 1);
    };

    return (
        <div className="flex justify-center items-center py-4  ">
            <Button
                variant="text"
                className="flex items-center gap-2 "
                onClick={prev}
                disabled={active === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Anterior
            </Button>
            <div className="flex items-center gap-2">
                <IconButton {...getItemProps(1)}>1</IconButton>
                <IconButton {...getItemProps(2)}>2</IconButton>
                <IconButton {...getItemProps(3)}>3</IconButton>
                <IconButton {...getItemProps(4)}>4</IconButton>
                <IconButton {...getItemProps(5)}>5</IconButton>
            </div>
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={next}
                disabled={active === 5}
            >
                Próximo
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
}
