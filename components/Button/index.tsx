import React from "react";
import styles from './style.module.scss';
import cn from "classnames";

interface IProps {
    variants?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<IProps> = ({ variants, children, ...props }) => {
    return (
        <button className={cn(styles.button, {
            [styles.primary]: variants === 'primary',
            [styles.secondary]: variants === 'secondary',
            [styles.danger]: variants === 'danger',
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
