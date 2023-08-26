import { useEffect, useState } from 'react';
import { Button, IconButton, Typography } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { SelectComponent } from '../forms/NewSelectInput';

interface IPaginationProps {
    page: number;
    total: number;
    pageSize: number;
    onChange: (page: number) => void;
    onPaginationChange: (pageSize: number) => void;
}

export function Pagination({
    page,
    total,
    pageSize,
    onChange,
    onPaginationChange,
}: IPaginationProps) {
    const totalPages = Math.ceil(total / pageSize);
    const [active, setActive] = useState(page);
    const [itemsPerPage, setItemsPerPage] = useState(pageSize);
    // Atualizar o state 'active' quando o 'page' mudar
    useEffect(() => {
        setActive(page);
    }, [page]);

    const getItemProps = (index: any) =>
        ({
            variant: active === index ? 'filled' : 'text',
            color: 'gray',
            onClick: () => {
                setActive(index), onChange(index);
            },
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
        // <div className="flex items-center gap-5 p-4 bg-background shadow-2xl">
        //     <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2">
        //         <span className="text-lg font-semibold text-gray-700 w-full">
        //             Total {total ? total : 'ERRO'}
        //         </span>
        //         <SelectComponent
        //             key={1}
        //             label="Itens por página"
        //             name="pageSize"
        //             value={pageSize}
        //             onValueChange={(value) => {
        //                 console.log(value);
        //                 onPaginationChange(Number(value));
        //             }}
        //             className="bg-white border-2 border-primary focus:border-primary_hover rounded-md shadow-md px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 transition duration-150 ease-in-out"
        //             options={[
        //                 { value: '10', label: '10' },
        //                 { value: '15', label: '15' },
        //             ]}
        //             defaultValueComponent={{ value: '10', label: '10' }}
        //         />
        //     </div>

        //     <div className="flex flex-row items-center gap-5">
        //         <IconButton
        //             size="sm"
        //             variant="outlined"
        //             onClick={prev}
        //             disabled={active === 1}
        //         >
        //             <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        //         </IconButton>
        //         <Typography color="gray" className="font-normal">
        //             Página <strong className="text-gray-900">{active}</strong>{' '}
        //             de{' '}
        //             <strong className="text-gray-900">
        //                 {totalPages ? totalPages : '1'}
        //             </strong>
        //         </Typography>
        //         <IconButton
        //             size="sm"
        //             variant="outlined"
        //             onClick={next}
        //             disabled={active === totalPages}
        //         >
        //             <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        //         </IconButton>
        //     </div>
        // </div>
        <div className="flex items-center gap-5 p-4 bg-background shadow-2xl">
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col">
                    <Typography color="gray" className="font-normal">
                        Total{' '}
                        {total ? (
                            <strong className="text-gray-900">{total}</strong>
                        ) : (
                            'ERRO'
                        )}
                    </Typography>
                    <Typography color="gray" className="font-normal">
                        Página{' '}
                        <strong className="text-gray-900">{active}</strong> de{' '}
                        <strong className="text-gray-900">
                            {totalPages ? totalPages : '1'}
                        </strong>
                    </Typography>
                </div>
                <div className="flex flex-row items-center gap-5">
                    <IconButton
                        size="sm"
                        variant="outlined"
                        onClick={prev}
                        disabled={active === 1}
                    >
                        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                    </IconButton>
                    {/* <Typography color="gray" className="font-normal">
                        Página{' '}
                        <strong className="text-gray-900">{active}</strong> de{' '}
                        <strong className="text-gray-900">
                            {totalPages ? totalPages : '1'}
                        </strong>
                    </Typography> */}
                    <IconButton
                        size="sm"
                        variant="outlined"
                        onClick={next}
                        disabled={active === totalPages}
                    >
                        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
