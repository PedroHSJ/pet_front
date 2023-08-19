import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface IPaginationProps {
    total: number;
    limit: number;
    offset: number;
    setOffset: (offset: number) => void;
    maxButtons?: number;
}

export const Pagination = ({
    total,
    limit,
    offset,
    setOffset,
}: IPaginationProps) => {
    const pages = Math.ceil(total / limit);
    const currentPage = offset / limit + 1;
    const previous = currentPage - 1;
    const next = currentPage + 1;
    const hasNext = next <= pages;
    const hasPrevious = previous > 0;

    return (
        <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
            <div className="flex justify-between flex-1 sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
                >
                    Anterior
                </a>
                <a
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium leading-5 text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
                >
                    Próximo
                </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm leading-5 text-gray-700">
                        Mostrando
                        <span className="font-medium"> {offset + 1} </span>a
                        <span className="font-medium"> {offset + limit} </span>
                        de
                        <span className="font-medium"> {total} </span>
                        resultados
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex shadow-sm">
                        <button
                            onClick={() => setOffset(0)}
                            disabled={!hasPrevious}
                            className="relative inline-flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-500 bg-white border border-gray-300 rounded-l-md hover:text-gray-400 focus:z-10 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-500"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="w-5 h-5" />
                        </button>
                        {/* {Array.from({ length: pages }).map((_, index) => (
                            
                            <button
                                key={index}
                                onClick={() => setOffset(index * limit)}
                                className={`-ml-px relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 ${
                                    index * limit === offset
                                        ? 'bg-gray-200'
                                        : 'bg-white'
                                } border border-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700`}
                            >
                                {index + 1}
                            </button>
                        ))} */}

                        {Array.from({ length: pages })
                            .slice(
                                currentPage - 1,
                                currentPage - 1 + 3 > pages
                                    ? pages
                                    : currentPage - 1 + 3,
                            )
                            .map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        setOffset(
                                            index * limit +
                                                (currentPage - 1) * limit,
                                        )
                                    }
                                    className={`-ml-px relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 ${
                                        index * limit +
                                            (currentPage - 1) * limit ===
                                        offset
                                            ? 'bg-gray-200'
                                            : 'bg-white'
                                    } border border-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700`}
                                >
                                    {index + currentPage}
                                </button>
                            ))}

                        <button
                            onClick={() => {
                                setOffset(
                                    currentPage * limit >= total
                                        ? offset
                                        : currentPage * limit,
                                );
                            }}
                            disabled={!hasNext}
                            className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium leading-5 text-gray-500 bg-white border border-gray-300 rounded-r-md hover:text-gray-400 focus:z-10 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-500"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="w-5 h-5" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};
