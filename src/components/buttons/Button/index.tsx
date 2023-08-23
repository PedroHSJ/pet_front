import { ReactNode, useEffect } from 'react';
import { Loading } from '../../resources/Loading';
import { ButtonContainer, Label } from './styles';
import { useTheme } from 'styled-components';
import { ButtonProps, Button as ButtonMT } from '@material-tailwind/react';

interface IButtonProps {
    children: ReactNode;
    onClick?: () => void;
    loading?: boolean;
    disabled?: boolean;
    type: 'button' | 'submit' | 'reset';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    rounded?: boolean;
    color?: string;
    style: 'primary' | 'secondary';
}

export const Button = ({
    children,
    onClick,
    loading,
    disabled,
    size,
    type,
    style,
}: IButtonProps): JSX.Element => {
    return (
        <div className="w-full">
            {style === 'primary' && (
                <ButtonMT
                    size={size}
                    disabled={loading || disabled}
                    onClick={onClick}
                    fullWidth
                    type={type}
                    className="bg-primary"
                >
                    {loading ? <Loading /> : <Label>{children}</Label>}
                </ButtonMT>
            )}
            {style === 'secondary' && (
                <ButtonMT
                    size={size}
                    disabled={loading || disabled}
                    onClick={onClick}
                    fullWidth
                    type={type}
                    className="bg-gray-400 text-black hover:bg-gray-500"
                >
                    {loading ? <Loading /> : <Label>{children}</Label>}
                </ButtonMT>
            )}
        </div>
    );
};
