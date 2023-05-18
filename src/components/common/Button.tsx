import {ButtonHTMLAttributes, FC} from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string;
    className?: string;
}

const Button:FC<IButtonProps> = ({title, className,...props}) => {
    return (
        <button className={`button ${className ?? ""}`} {...props}>{title}</button>
    );
};

export default Button;
