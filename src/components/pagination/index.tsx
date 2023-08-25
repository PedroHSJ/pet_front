import { useEffect, useState } from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

interface IPaginationProps {
    page: number;
    total: number;
    pageSize: number;
    onChange: (page: number) => void;
}

export function Pagination({ page, total, pageSize, onChange }: IPaginationProps) {
    const totalPages = Math.ceil(total / pageSize);
    const [active, setActive] = useState(page);

    // Atualizar o state 'active' quando o 'page' mudar
    useEffect(() => {
        setActive(page);
    }, [page]);

    const getItemProps = (index: any) =>
        ({
            variant: active === index ? 'filled' : 'text',
            color: 'gray',
            onClick: () => {
                setActive(index),
                onChange(index);
            }
        } as any);

        const next = () => {
            if (active < totalPages) {
                setActive(active + 1);
                onChange(active + 1);
            }
        };
        
        const prev = () => {
            if (active > 1) {
                setActive(active - 1);
                onChange(active - 1);
            }
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
                {Array.from({ length: totalPages }).map((_, index) => (
                    <IconButton {...getItemProps(index + 1)} key={index}>
                        {index + 1}
                    </IconButton>
                ))}
            </div>
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={next}
                disabled={active === totalPages}
            >
                Próximo
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
}
