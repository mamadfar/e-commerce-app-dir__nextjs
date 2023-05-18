import {ButtonHTMLAttributes, FC} from 'react';

interface IButtonProps {
    title: string;
    className?: string;
    props?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button:FC<IButtonProps> = ({title, className,...props}) => {
    return (
        <button className={`button ${className ?? ""}`} {...props}>{title}</button>
    );
};

export default Button;
