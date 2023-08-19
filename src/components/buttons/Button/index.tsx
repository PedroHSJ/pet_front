import { ReactNode, useEffect } from 'react';
import { Loading } from '../../resources/Loading';
import { ButtonContainer, Label } from './styles';
import { useTheme } from 'styled-components';
import { ButtonProps, Button as ButtonMT } from '@material-tailwind/react';

interface IButtonProps extends Omit<ButtonProps, 'color'> {
    children: ReactNode;
    onClick?: () => void;
    loading?: boolean;
    disabled?: boolean;
    type: 'button' | 'submit' | 'reset';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    rounded?: boolean;
    color?: string;
}

export const Button = ({
    children,
    onClick,
    loading,
    disabled,
    size,
    type,
    color,
}: IButtonProps): JSX.Element => {
    return (
        <div className="w-full">
            <ButtonMT
                size={size}
                disabled={loading || disabled}
                onClick={onClick}
                fullWidth
                type={type}
                className={color ? `bg-${color}` : 'bg-primary'}
            >
                {loading ? <Loading /> : <Label>{children}</Label>}
            </ButtonMT>
        </div>
    );
};
