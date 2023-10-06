import React from 'react';

interface IProfileCardProps {
    children: React.ReactNode;
    onClick?: () => void;
    first?: boolean;
    last?: boolean;
}

export const ProfileCard = ({
    children,
    onClick,
    first,
    last,
}: IProfileCardProps) => {
    return (
        <div
            onClick={onClick}
            className={`bg-white 
            overflow-hidden 
            shadow 
            mx-4            
            border-bottom-gray-500 
            hover:bg-gray-50 
            cursor-pointer 
            transition 
            duration-150 
            ease-in-out
            ${first ? 'rounded-tr-lg rounded-tl-lg' : ''}
            ${last ? 'rounded-br-lg rounded-bl-lg' : ''}
            `}
        >
            {children}
        </div>
    );
};
