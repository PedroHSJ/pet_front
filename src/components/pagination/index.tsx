import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; // Importando ícones de setas

interface PaginationProps {
    pageSize: number;
    totalCount: number;
    numButtons: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    pageSize,
    totalCount,
    numButtons,
    currentPage,
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalCount / pageSize);
    const startPage = Math.max(1, currentPage - Math.floor(numButtons / 2));
    const endPage = Math.min(totalPages, startPage + numButtons - 1);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <nav className="flex items-center justify-center mt-8">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="cursor-pointer relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
                <BsChevronLeft />
            </button>
            <div className="flex">
                {Array.from(
                    { length: endPage - startPage + 1 },
                    (_, index) => startPage + index,
                ).map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`mx-1 px-2 py-1 rounded ${
                            page === currentPage
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-300'
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="ml-2 px-3 py-1 bg-gray-300 rounded"
            >
                <BsChevronRight />
            </button>
            <p className="ml-4">Total de Itens: {totalCount}</p>
        </nav>
    );
};

export default Pagination;
