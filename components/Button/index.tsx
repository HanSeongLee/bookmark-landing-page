import React, {ButtonHTMLAttributes} from "react";
import styles from './style.module.scss';
import cn from "classnames";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variants?: 'primary' | 'secondary' | 'danger' | 'outline';
}

const Button: React.FC<IProps> = ({ variants, children, ...props }) => {
    return (
        <button className={cn(styles.button, {
            [styles.primary]: variants === 'primary',
            [styles.secondary]: variants === 'secondary',
            [styles.danger]: variants === 'danger',
            [styles.outline]: variants === 'outline',
        })}
                {...props}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    variants: 'primary',
};

export default Button;
